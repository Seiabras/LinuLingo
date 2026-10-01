import type { StorySeed } from '../types';

/** Histórias interativas do francês, pela França e pela francofonia (escolha a sua aventura). */
export const STORIES_FR: StorySeed[] = [
  // ───────────────────────── A1.1 ─────────────────────────
  {
    id: 'fr-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Un croissant à Paris',
    emoji: '🥐',
    summary: 'Numa padaria de Paris, o Linu aprende a cumprimentar como um parisiense e pede o seu primeiro croissant.',
    cultural_context:
      'Na França, ao entrar numa loja ou padaria, cumprimenta-se sempre com “Bonjour, madame” ou “Bonjour, monsieur”: entrar sem dizer “bonjour” soa mal-educado. Em 2022, o saber artesanal e a cultura da baguette entraram na lista do Patrimônio Cultural Imaterial da UNESCO.',
    start: 'start',
    glossary: [
      ['Bonjour, madame !', 'Bom dia, senhora! (em loja, sempre)'],
      ['Salut !', 'Oi! (só entre amigos)'],
      ['Vous êtes… ? / Je suis…', 'O senhor é…? / Eu sou…'],
      ['la boulangerie', 'a padaria'],
      ['la boulangère', 'a padeira'],
      ["s'il vous plaît", 'por favor (formal)'],
      ['deux / douze', 'dois / doze'],
      ['Au revoir !', 'Tchau! Até logo!'],
    ],
    nodes: {
      start: {
        emoji: '🗼',
        text: 'Paris, le matin. Voici une boulangerie ! Linu a faim.',
        translation: 'Paris, de manhã. Eis uma padaria! O Linu está com fome.',
        choices: [
          { text: '“ Bonjour, madame ! ”', translation: '“Bom dia, senhora!”', next: 'boulangere' },
          {
            text: '“ Salut ! ”',
            translation: '“Oi!”',
            wrong: 'A padeira é uma desconhecida e o Linu está numa loja: “Salut” é só para amigos. Ao entrar numa loja, diz-se “Bonjour, madame” (ou “Bonjour, monsieur”).',
          },
        ],
      },
      boulangere: {
        emoji: '👩‍🍳',
        text: '“ Bonjour ! Vous êtes touriste ? ”',
        translation: '“Bom dia! O senhor é turista?”',
        choices: [
          { text: '“ Oui, je suis Linu. Je suis brésilien. ”', translation: '“Sim, eu sou o Linu. Sou brasileiro.”', next: 'commande' },
          {
            text: '“ Oui, vous êtes touriste. ”',
            translation: '“Sim, a senhora é turista.”',
            wrong: 'A padeira perguntou “Vous êtes touriste ?” (O senhor é turista?). Para falar de você mesmo, use “je suis”: “Oui, je suis touriste”.',
          },
        ],
      },
      commande: {
        emoji: '🥖',
        text: '“ Bienvenue ! Un croissant ? Une baguette ? ”',
        translation: '“Bem-vindo! Um croissant? Uma baguette?”',
        choices: [
          { text: "“ Un croissant, s'il vous plaît. ”", translation: '“Um croissant, por favor.”', next: 'prix' },
          { text: "“ Une baguette, s'il vous plaît. ”", translation: '“Uma baguette, por favor.”', next: 'baguette' },
        ],
      },
      baguette: {
        emoji: '🥖',
        text: 'La baguette est grande. Linu est petit ! Il mange sous la tour Eiffel.',
        translation: 'A baguette é grande. O Linu é pequeno! Ele come embaixo da torre Eiffel.',
        ending: { tone: 'neutro', title: 'Uma baguette maior que o Linu', message: 'O pão estava ótimo, mas o croissant ficou para outro dia. Tente de novo!' },
      },
      prix: {
        emoji: '🪙',
        text: '“ Voilà ! Deux euros, monsieur. ”',
        translation: '“Aqui está! Dois euros, senhor.”',
        choices: [
          { text: '“ Voilà deux euros. Merci ! ”', translation: '“Aqui estão dois euros. Obrigado!”', next: 'final_bom' },
          {
            text: '“ Voilà douze euros. ”',
            translation: '“Aqui estão doze euros.”',
            wrong: 'O croissant custa “deux” [dø] (2) euros, não “douze” [duz] (12). Cuidado com os números parecidos!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Le croissant est chaud. Il est délicieux ! “ Au revoir, madame ! ”',
        translation: 'O croissant está quentinho. Está delicioso! “Até logo, senhora!”',
        ending: { tone: 'bom', title: 'Bonjour, Paris!', message: 'O Linu cumprimentou como um parisiense, pagou certinho e tomou o café da manhã mais francês possível.' },
      },
    },
  },
  {
    id: 'fr-h2',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Le Vieux-Port de Marseille',
    emoji: '🐟',
    summary: 'No Vieux-Port de Marselha, o Linu conhece o pescador Marius e a neta dele, a Inès.',
    cultural_context:
      'O Vieux-Port é o coração de Marselha, cidade fundada por gregos por volta de 600 a.C. Todas as manhãs os pescadores vendem ali o peixe do dia. No alto de uma colina, a basílica de Notre-Dame-de-la-Garde, que os marselheses chamam de “la Bonne Mère” (a Boa Mãe), vigia a cidade.',
    start: 'start',
    glossary: [
      ['le pêcheur', 'o pescador'],
      ['la mer', 'o mar (feminino em francês!)'],
      ["J'ai faim. / Tu as faim ?", 'Estou com fome. / Você está com fome? (com avoir)'],
      ["Moi, c'est…", 'Eu sou o/a… (informal)'],
      ['la sardine', 'a sardinha'],
      ['six / seize', 'seis / dezesseis'],
      ['en haut', 'lá em cima'],
    ],
    nodes: {
      start: {
        emoji: '⛵',
        text: 'Marseille, le Vieux-Port. Il est sept heures. Un monsieur est là, avec des poissons.',
        translation: 'Marselha, o Porto Velho. São sete horas. Um senhor está ali, com peixes.',
        choices: [
          { text: '“ Bonjour, monsieur ! ”', translation: '“Bom dia, senhor!”', next: 'marius' },
          { text: 'Linu regarde la Bonne Mère, en haut.', translation: 'O Linu olha a Bonne Mère, lá em cima.', next: 'colline' },
        ],
      },
      colline: {
        emoji: '⛪',
        text: 'Linu monte, monte… Il est fatigué ! La basilique est belle, mais les poissons ?',
        translation: 'O Linu sobe, sobe… Ele está cansado! A basílica é bonita, mas e os peixes?',
        ending: { tone: 'neutro', title: 'Lá no alto', message: 'O Linu subiu até a Bonne Mère, mas perdeu o mercado de peixes. Tente de novo!' },
      },
      marius: {
        emoji: '🎣',
        text: '“ Bonjour ! Je suis Marius. Je suis pêcheur. Et vous ? ”',
        translation: '“Bom dia! Eu sou o Marius. Sou pescador. E o senhor?”',
        choices: [
          { text: '“ Je suis Linu. Je suis touriste. ”', translation: '“Eu sou o Linu. Sou turista.”', next: 'ines' },
          {
            text: '“ Je suis pêcheur. ”',
            translation: '“Eu sou pescador.”',
            wrong: 'Quem é pescador (“pêcheur”) é o Marius: ele disse “Je suis pêcheur”. O Linu é turista: “Je suis touriste”.',
          },
        ],
      },
      ines: {
        emoji: '👧',
        text: "Une fille arrive. “ Salut ! Moi, c'est Inès. Tu as faim ? ”",
        translation: 'Chega uma menina. “Oi! Eu sou a Inès. Você está com fome?”',
        choices: [
          { text: "“ Oui, j'ai très faim ! ”", translation: '“Sim, estou com muita fome!”', next: 'prix' },
          {
            text: '“ Oui, tu as faim ! ”',
            translation: '“Sim, você está com fome!”',
            wrong: "A Inès perguntou “Tu as faim ?” (Você está com fome?). Para responder sobre você, use “j'ai”: “J'ai faim”. Em francês, a fome se TEM, com o verbo avoir.",
          },
        ],
      },
      prix: {
        emoji: '🐟',
        text: 'Marius : “ Trois sardines : six euros. ”',
        translation: 'Marius: “Três sardinhas: seis euros.”',
        choices: [
          { text: '“ Voilà six euros. Merci ! ”', translation: '“Aqui estão seis euros. Obrigado!”', next: 'final_bom' },
          {
            text: '“ Voilà seize euros. ”',
            translation: '“Aqui estão dezesseis euros.”',
            wrong: 'As sardinhas custam “six” [sis] (6) euros. “Seize” [sɛz] é dezesseis!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu a trois sardines. Il est content ! “ Merci, Marius ! Merci, Inès ! ”',
        translation: 'O Linu tem três sardinhas. Ele está contente! “Obrigado, Marius! Obrigado, Inès!”',
        ending: { tone: 'bom', title: 'Café da manhã de pinguim', message: 'O Linu fez dois amigos marselheses e levou as sardinhas mais frescas do porto.' },
      },
    },
  },
  {
    id: 'fr-h3',
    level: 'A1.1',
    cefr: 'A1',
    title: 'La marée du Mont-Saint-Michel',
    emoji: '🌊',
    summary: 'Na baía do Mont-Saint-Michel, o Linu atravessa a areia com uma guia antes que a maré suba.',
    cultural_context:
      'As marés da baía do Mont-Saint-Michel, na Normandia, estão entre as maiores da Europa: a diferença entre a maré baixa e a alta pode chegar a uns 14 metros. Por isso, recomenda-se atravessar a baía a pé só com um guia. O Mont e a sua abadia são Patrimônio Mundial da UNESCO.',
    start: 'start',
    glossary: [
      ['la marée', 'a maré'],
      ['le sable', 'a areia'],
      ['le guide / la guide', 'o guia / a guia'],
      ['seul / seule', 'sozinho / sozinha'],
      ['pieds nus', 'descalço'],
      ['onze heures / midi', 'onze horas / meio-dia'],
      ['le manchot', 'o pinguim (“pingouin” é, a rigor, outra ave, a torda)'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Normandie. Voici le Mont-Saint-Michel ! Linu est sur le sable.',
        translation: 'Normandia. Eis o Mont-Saint-Michel! O Linu está na areia.',
        choices: [
          { text: '“ Bonjour, madame ! Vous êtes guide ? ”', translation: '“Bom dia, senhora! A senhora é guia?”', next: 'guide' },
          { text: 'Linu marche seul vers le Mont.', translation: 'O Linu caminha sozinho em direção ao Mont.', next: 'seul' },
        ],
      },
      seul: {
        emoji: '💦',
        text: 'Linu est seul. Le sable est mou… et la mer arrive ! Vite !',
        translation: 'O Linu está sozinho. A areia está mole… e o mar está chegando! Rápido!',
        choices: [{ text: 'Linu court vers le Mont.', translation: 'O Linu corre em direção ao Mont.', next: 'final_mouille' }],
      },
      final_mouille: {
        emoji: '🐧',
        text: "Linu arrive au Mont. Il est mouillé ! Mais un manchot mouillé, c'est normal, non ?",
        translation: 'O Linu chega ao Mont. Está encharcado! Mas um pinguim molhado é normal, não é?',
        ending: { tone: 'neutro', title: 'Pinguim encharcado', message: 'O Linu chegou, mas a maré foi mais rápida. Na baía, é melhor ir com um guia. Tente de novo!' },
      },
      guide: {
        emoji: '🧭',
        text: '“ Oui, je suis guide. Je suis Claire. Vous avez des chaussures ? ”',
        translation: '“Sim, sou guia. Eu sou a Claire. O senhor tem sapatos?”',
        choices: [
          { text: "“ Non ! J'ai des pieds de manchot. ”", translation: '“Não! Eu tenho pés de pinguim.”', next: 'pieds' },
        ],
      },
      pieds: {
        emoji: '🦶',
        text: '“ Parfait ! Ici, on marche pieds nus. Attention : il est onze heures, et la mer arrive à midi. ”',
        translation: '“Perfeito! Aqui se caminha descalço. Atenção: são onze horas, e o mar chega ao meio-dia.”',
        choices: [
          { text: '“ Une heure ! Vite, Claire ! ”', translation: '“Uma hora! Rápido, Claire!”', next: 'final_bom' },
          {
            text: '“ Trois heures ? Parfait, je suis tranquille. ”',
            translation: '“Três horas? Perfeito, estou tranquilo.”',
            wrong: 'A Claire disse que são “onze heures” (11h) e que o mar chega a “midi” (meio-dia). Então é só UMA hora, não três!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Claire et Linu arrivent au Mont à onze heures et demie. La mer arrive. Ouf ! “ Merci, Claire ! ”',
        translation: 'A Claire e o Linu chegam ao Mont às onze e meia. O mar está chegando. Ufa! “Obrigado, Claire!”',
        ending: { tone: 'bom', title: 'Antes da maré', message: 'Com a guia, o Linu atravessou a baía descalço e chegou seco ao Mont-Saint-Michel.' },
      },
    },
  },
  // ───────────────────────── A1.2 ─────────────────────────
  {
    id: 'fr-h4',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Un bouchon à Lyon',
    emoji: '🍽️',
    summary: 'Em Lyon, o Linu e o amigo Hugo jantam num “bouchon”, o restaurante típico da cidade.',
    cultural_context:
      'Os “bouchons” são os restaurantes tradicionais de Lyon, com toalhas xadrez e pratos fartos como a quenelle e a salade lyonnaise. Lyon é considerada uma das capitais da gastronomia francesa, e a tarte aux pralines, cor-de-rosa, é uma das suas sobremesas típicas.',
    start: 'start',
    glossary: [
      ['le bouchon', 'o restaurante típico de Lyon (e também a rolha, e o engarrafamento!)'],
      ['il y a', 'há, tem'],
      ['du saucisson / de la salade / des quenelles', 'salame / salada / quenelles (partitivo: uma parte, uma quantidade)'],
      ["de l'eau", 'água (partitivo antes de vogal)'],
      ['le serveur', 'o garçom'],
      ["J'aime… / J'adore…", 'Eu gosto de… / Eu adoro…'],
      ['rose', 'cor-de-rosa'],
    ],
    nodes: {
      start: {
        emoji: '🌆',
        text: 'Lyon, le soir. Linu et Hugo cherchent un restaurant. Dans la rue, il y a un bouchon.',
        translation: 'Lyon, à noite. O Linu e o Hugo procuram um restaurante. Na rua, tem um bouchon.',
        choices: [
          { text: 'Ils entrent dans le bouchon.', translation: 'Eles entram no bouchon.', next: 'menu' },
          { text: '“ Un bouchon ? Non, merci. Une pizza ! ”', translation: '“Um bouchon? Não, obrigado. Uma pizza!”', next: 'pizza' },
        ],
      },
      pizza: {
        emoji: '🍕',
        text: 'Linu et Hugo mangent une pizza. Elle est bonne… mais à Lyon, les bouchons sont une tradition !',
        translation: 'O Linu e o Hugo comem uma pizza. Ela é boa… mas em Lyon os bouchons são uma tradição!',
        ending: { tone: 'neutro', title: 'Pizza em Lyon', message: 'Estava gostoso, mas o Linu não provou a cozinha lionesa. Tente de novo!' },
      },
      menu: {
        emoji: '🧑‍🍳',
        text: 'Le serveur arrive. “ Ce soir, il y a du saucisson, de la salade lyonnaise et des quenelles. ”',
        translation: 'O garçom chega. “Hoje à noite tem salame, salada lionesa e quenelles.”',
        choices: [
          { text: "“ Des quenelles, s'il vous plaît ! ”", translation: '“Quenelles, por favor!”', next: 'quenelles' },
          {
            text: '“ Il y a de la pizza ? ”',
            translation: '“Tem pizza?”',
            wrong: 'O garçom disse o que há hoje (“il y a”): du saucisson, de la salade lyonnaise e des quenelles. Não tem pizza no cardápio!',
          },
        ],
      },
      quenelles: {
        emoji: '🥘',
        text: 'Hugo mange du saucisson. Linu goûte les quenelles : elles sont délicieuses ! Le serveur demande : “ Et comme boisson ? ”',
        translation: 'O Hugo come salame. O Linu prova as quenelles: estão deliciosas! O garçom pergunta: “E para beber?”',
        choices: [
          { text: "“ De l'eau, s'il vous plaît. ”", translation: '“Água, por favor.”', next: 'dessert' },
        ],
      },
      dessert: {
        emoji: '🍰',
        text: 'Pour le dessert, il y a la tarte aux pralines. Elle est rose ! Hugo adore les pralines.',
        translation: 'De sobremesa, tem a torta de pralinas. Ela é cor-de-rosa! O Hugo adora pralinas.',
        choices: [
          { text: "“ Deux tartes, s'il vous plaît : une pour Hugo et une pour moi ! ”", translation: '“Duas tortas, por favor: uma para o Hugo e uma para mim!”', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Les tartes sont roses et sucrées. Linu aime les bouchons. Il aime Lyon !',
        translation: 'As tortas são cor-de-rosa e doces. O Linu gosta dos bouchons. Ele gosta de Lyon!',
        ending: { tone: 'bom', title: 'Um jantar lionês', message: 'Quenelles, água e torta rosa: o Linu jantou como um verdadeiro lionês.' },
      },
    },
  },
  {
    id: 'fr-h5',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Une galette à Saint-Malo',
    emoji: '🫓',
    summary: 'Num dia de chuva em Saint-Malo, na Bretanha, o Linu descobre a diferença entre a galette e a crêpe.',
    cultural_context:
      'Na Bretanha, a “galette” é feita com farinha de trigo-sarraceno (o “blé noir”) e tem recheio salgado; a “crêpe”, de farinha de trigo comum, é doce. Costumam vir com sidra, servida numa “bolée”, uma tigelinha de cerâmica. O caramelo com manteiga salgada também é bretão.',
    start: 'start',
    glossary: [
      ['la crêperie', 'a creperia'],
      ['la galette / la crêpe', 'a galette (salgada) / a crêpe (doce)'],
      ['salé / salée', 'salgado / salgada'],
      ['sucré / sucrée', 'doce, açucarado / açucarada'],
      ['du jambon / du fromage / un œuf', 'presunto / queijo / um ovo'],
      ['le cidre', 'a sidra'],
      ['Il pleut.', 'Está chovendo.'],
    ],
    nodes: {
      start: {
        emoji: '🌧️',
        text: 'Saint-Malo, en Bretagne. Il pleut. Linu cherche un endroit sec.',
        translation: 'Saint-Malo, na Bretanha. Está chovendo. O Linu procura um lugar seco.',
        choices: [
          { text: 'Linu entre dans une crêperie.', translation: 'O Linu entra numa creperia.', next: 'carte' },
          { text: 'Linu marche sur les remparts.', translation: 'O Linu caminha pelas muralhas.', next: 'remparts' },
        ],
      },
      remparts: {
        emoji: '🏰',
        text: 'Les remparts sont beaux et la mer est grise. Linu adore la pluie… mais il a faim !',
        translation: 'As muralhas são bonitas e o mar está cinza. O Linu adora chuva… mas está com fome!',
        ending: { tone: 'neutro', title: 'Passeio na chuva', message: 'Belo passeio, mas o Linu ficou sem almoço. Tente de novo e entre na creperia!' },
      },
      carte: {
        emoji: '📜',
        text: 'Maëlle, la crêpière, explique : “ Les galettes sont salées. Les crêpes sont sucrées. ”',
        translation: 'A Maëlle, a crepeira, explica: “As galettes são salgadas. As crêpes são doces.”',
        choices: [
          { text: "“ Une galette avec du jambon et du fromage, s'il vous plaît ! ”", translation: '“Uma galette com presunto e queijo, por favor!”', next: 'galette' },
          {
            text: "“ Une galette avec du chocolat, s'il vous plaît ! ”",
            translation: '“Uma galette com chocolate, por favor!”',
            wrong: 'A Maëlle explicou que as galettes são salgadas (“salées”). O chocolate vai na crêpe, que é doce (“sucrée”).',
          },
        ],
      },
      galette: {
        emoji: '🍳',
        text: 'Maëlle ajoute un œuf. La galette arrive : du jambon, du fromage et un œuf !',
        translation: 'A Maëlle acrescenta um ovo. A galette chega: presunto, queijo e um ovo!',
        choices: [{ text: '“ Et comme boisson ? ”', translation: '“E para beber?”', next: 'cidre' }],
      },
      cidre: {
        emoji: '🍶',
        text: 'Maëlle apporte du cidre dans une bolée. Elle demande : “ Et pour le dessert, une crêpe ? ”',
        translation: 'A Maëlle traz sidra numa bolée. Ela pergunta: “E de sobremesa, uma crêpe?”',
        choices: [
          { text: '“ Oui ! Une crêpe au caramel au beurre salé ! ”', translation: '“Sim! Uma crêpe de caramelo com manteiga salgada!”', next: 'final_bom' },
          {
            text: '“ Oui ! Une galette au jambon ! ”',
            translation: '“Sim! Uma galette de presunto!”',
            wrong: 'A Maëlle ofereceu uma crêpe de sobremesa (“pour le dessert”). A galette de presunto é salgada: não é sobremesa!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Dehors, il pleut. Dedans, Linu mange sa crêpe. Il aime la Bretagne !',
        translation: 'Lá fora, chove. Aqui dentro, o Linu come a sua crêpe. Ele gosta da Bretanha!',
        ending: { tone: 'bom', title: 'Chuva e crêpe', message: 'Galette salgada, sidra na bolée e crêpe de caramelo: o Linu almoçou como um bretão.' },
      },
    },
  },
  {
    id: 'fr-h6',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Noël à Strasbourg',
    emoji: '🎄',
    summary: 'No mercado de Natal de Estrasburgo, o Linu prova os “bredele” da Alsácia com a Léa.',
    cultural_context:
      'O mercado de Natal de Estrasburgo, o “Christkindelsmärik”, é um dos mais antigos da França: acontece desde 1570, perto da catedral. Os “bredele” são biscoitinhos de Natal alsacianos, de muitas formas e sabores.',
    start: 'start',
    glossary: [
      ['le marché de Noël', 'o mercado de Natal'],
      ['les bredele', 'biscoitinhos de Natal da Alsácia'],
      ['une étoile à la cannelle', 'uma estrela de canela (biscoito)'],
      ['le sapin', 'o pinheiro (a árvore de Natal)'],
      ["acheter / j'achète", 'comprar / eu compro'],
      ['chaud / froid', 'quente / frio'],
      ['le jus de pomme', 'o suco de maçã'],
    ],
    nodes: {
      start: {
        emoji: '❄️',
        text: 'Strasbourg, en décembre. Il fait froid, mais Linu aime le froid ! Devant la cathédrale, il y a un marché de Noël.',
        translation: 'Estrasburgo, em dezembro. Faz frio, mas o Linu gosta do frio! Em frente à catedral, tem um mercado de Natal.',
        choices: [
          { text: 'Linu visite le marché.', translation: 'O Linu visita o mercado.', next: 'marche' },
          { text: 'Linu monte en haut de la cathédrale.', translation: 'O Linu sobe ao alto da catedral.', next: 'cathedrale' },
        ],
      },
      cathedrale: {
        emoji: '⛪',
        text: 'Il y a beaucoup de marches ! En haut, Linu regarde la ville. Mais maintenant, le marché ferme.',
        translation: 'São muitos degraus! Lá em cima, o Linu olha a cidade. Mas agora o mercado está fechando.',
        ending: { tone: 'neutro', title: 'Estrasburgo lá de cima', message: 'Que vista! Mas o Linu não chegou a ver o mercado de Natal. Tente de novo!' },
      },
      marche: {
        emoji: '🎪',
        text: 'Il y a des sapins, des lumières et des chalets. Dans un chalet, Léa vend des gâteaux.',
        translation: 'Tem pinheiros, luzes e barraquinhas. Numa barraquinha, a Léa vende biscoitos.',
        choices: [{ text: '“ Bonjour ! Ce sont des bredele ? ”', translation: '“Bom dia! São bredele?”', next: 'bredele' }],
      },
      bredele: {
        emoji: '⭐',
        text: '“ Oui ! Il y a des étoiles à la cannelle et des gâteaux au beurre. Tu aimes la cannelle ? ”',
        translation: '“Sim! Tem estrelas de canela e biscoitos de manteiga. Você gosta de canela?”',
        choices: [
          { text: "“ J'adore la cannelle ! Trois étoiles, s'il te plaît. ”", translation: '“Adoro canela! Três estrelas, por favor.”', next: 'boisson' },
          {
            text: "“ Des gâteaux au chocolat, s'il te plaît ! ”",
            translation: '“Biscoitos de chocolate, por favor!”',
            wrong: 'A Léa disse o que tem (“il y a”): estrelas de canela e biscoitos de manteiga (“au beurre”). De chocolate, não tem!',
          },
        ],
      },
      boisson: {
        emoji: '🍎',
        text: 'Linu mange une étoile. Léa demande : “ Tu as froid ? Il y a du jus de pomme chaud. ”',
        translation: 'O Linu come uma estrela. A Léa pergunta: “Você está com frio? Tem suco de maçã quente.”',
        choices: [
          { text: '“ Non, merci ! Un manchot aime le froid ! ”', translation: '“Não, obrigado! Pinguim gosta de frio!”', next: 'final_bom' },
          { text: "“ Oui, du jus de pomme chaud, s'il te plaît ! ”", translation: '“Sim, suco de maçã quente, por favor!”', next: 'final_bom' },
          {
            text: '“ Oui, du jus de pomme froid ! ”',
            translation: '“Sim, suco de maçã gelado!”',
            wrong: 'A Léa ofereceu suco de maçã QUENTE (“chaud”). Atenção: em francês, “chaud” é quente, não frio!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Les lumières brillent. Linu achète des bredele pour ses amis. Joyeux Noël, Strasbourg !',
        translation: 'As luzes brilham. O Linu compra bredele para os amigos. Feliz Natal, Estrasburgo!',
        ending: { tone: 'bom', title: 'Feliz Natal!', message: 'O Linu provou os bredele da Léa e levou biscoitos alsacianos para os amigos.' },
      },
    },
  },
  // ───────────────────────── A2.1 ─────────────────────────
  {
    id: 'fr-h7',
    level: 'A2.1',
    cefr: 'A2',
    title: "Le miroir d'eau de Bordeaux",
    emoji: '💧',
    summary: "Em Bordeaux, a Chloé leva o Linu ao espelho d'água da place de la Bourse e depois à casa da avó, que faz canelés.",
    cultural_context:
      "Em frente à place de la Bourse, do século XVIII, o “miroir d'eau” de Bordeaux é uma grande laje de granito coberta por uns dois centímetros de água, que reflete os prédios e de tempos em tempos solta uma névoa. O canelé, bolinho com casquinha caramelizada e miolo macio, com baunilha e rum, é o doce típico da cidade.",
    start: 'start',
    glossary: [
      ["Tu viens d'où ?", 'De onde você vem?'],
      ['Je viens de… / Je vais à…', 'Eu venho de… / Eu vou para…'],
      ['chez ma grand-mère', 'na casa da minha avó'],
      ['on ne nage pas', 'não se nada (on = a gente, se)'],
      ["Est-ce que c'est loin ?", 'É longe?'],
      ['le brouillard', 'a névoa, a neblina'],
      ['partir / sortir', 'partir, ir embora / sair'],
      ['le canelé', 'bolinho típico de Bordeaux'],
    ],
    nodes: {
      start: {
        emoji: '🚆',
        text: "Linu arrive de Paris en train. Son amie Chloé l'attend à la gare Saint-Jean. “ Salut, Linu ! Tu viens d'où, ce matin ? ”",
        translation: 'O Linu chega de Paris de trem. A amiga dele, a Chloé, o espera na estação Saint-Jean. “Oi, Linu! De onde você vem hoje de manhã?”',
        choices: [
          { text: '“ Je viens de Paris ! ”', translation: '“Venho de Paris!”', next: 'gare' },
          {
            text: '“ Je vais à Paris ! ”',
            translation: '“Vou para Paris!”',
            wrong: "A Chloé perguntou de onde o Linu VEM (“Tu viens d'où ?”), e ele acabou de chegar de Paris: “Je viens de Paris”. “Je vais à Paris” seria para onde ele vai.",
          },
        ],
      },
      gare: {
        emoji: '🗺️',
        text: "“ Qu'est-ce qu'on fait aujourd'hui ? ” demande Linu. “ On va au miroir d'eau, sur la place de la Bourse. Tu prends le tram ou tu préfères marcher ? ”",
        translation: "“O que a gente faz hoje?”, pergunta o Linu. “Vamos ao espelho d'água, na place de la Bourse. Você pega o bonde ou prefere caminhar?”",
        choices: [
          { text: 'Prendre le tram avec Chloé.', translation: 'Pegar o bonde com a Chloé.', next: 'tram' },
          { text: 'Marcher le long de la Garonne.', translation: 'Caminhar à beira do Garonne.', next: 'quais' },
        ],
      },
      tram: {
        emoji: '🚋',
        text: "Dans le tram, Chloé explique : “ Le miroir d'eau n'est pas une piscine, hein ! On ne nage pas. On marche dans l'eau, c'est tout. ”",
        translation: "No bonde, a Chloé explica: “O espelho d'água não é piscina, hein! Não se nada. A gente anda na água, e só.”",
        choices: [
          { text: '“ Compris ! On ne nage pas, on marche. ”', translation: '“Entendi! Não se nada, se anda.”', next: 'miroir' },
          {
            text: '“ Super ! Je vais nager comme à la maison ! ”',
            translation: '“Ótimo! Vou nadar como em casa!”',
            wrong: "A Chloé disse que o espelho d'água NÃO é uma piscina: “On ne nage pas” (não se nada). A negação francesa tem duas partes: ne… pas.",
          },
        ],
      },
      quais: {
        emoji: '🌉',
        text: 'Linu et Chloé marchent le long de la Garonne. Le fleuve est large et marron. Au bout des quais, voilà la place de la Bourse !',
        translation: 'O Linu e a Chloé caminham à beira do Garonne. O rio é largo e marrom. No fim do cais, eis a place de la Bourse!',
        choices: [{ text: "Aller jusqu'au miroir d'eau.", translation: "Ir até o espelho d'água.", next: 'miroir' }],
      },
      miroir: {
        emoji: '🏛️',
        text: "Sur le miroir, il y a seulement deux centimètres d'eau, et le palais se reflète dedans. Soudain, un brouillard sort du sol !",
        translation: 'No espelho só há dois centímetros de água, e o palácio se reflete nela. De repente, uma névoa sai do chão!',
        choices: [
          { text: 'Linu court dans le brouillard.', translation: 'O Linu corre na névoa.', next: 'brume' },
          { text: 'Linu a peur et part en courant.', translation: 'O Linu fica com medo e sai correndo.', next: 'final_peur' },
        ],
      },
      final_peur: {
        emoji: '☕',
        text: "Linu attend au café, loin du miroir. Chloé arrive et rit : “ Mais ce n'est pas dangereux, c'est de l'eau ! ”",
        translation: 'O Linu espera no café, longe do espelho. A Chloé chega e ri: “Mas não é perigoso, é água!”',
        ending: { tone: 'neutro', title: 'Medo de névoa', message: 'Era só névoa de água! O Linu perdeu a parte mais divertida. Tente de novo!' },
      },
      brume: {
        emoji: '🌫️',
        text: "“ C'est magique ! ” crie Linu. Après, Chloé demande : “ Tu as faim ? On va chez ma grand-mère. Elle fait des canelés ! ”",
        translation: '“É mágico!”, grita o Linu. Depois, a Chloé pergunta: “Está com fome? Vamos à casa da minha avó. Ela faz canelés!”',
        choices: [
          { text: "“ Oui ! Est-ce que c'est loin, chez ta grand-mère ? ”", translation: '“Sim! É longe, a casa da sua avó?”', next: 'canele' },
          {
            text: '“ Oui ! Quel restaurant ? ”',
            translation: '“Sim! Qual restaurante?”',
            wrong: 'A Chloé disse “chez ma grand-mère”: na CASA da avó dela, não num restaurante. “Chez” + pessoa quer dizer “na casa de”.',
          },
        ],
      },
      canele: {
        emoji: '🧁',
        text: 'Chez Mamie Josette, ça sent la vanille. Les canelés sortent du four : noirs dehors, tendres dedans. “ Tu veux un canelé, Linu ? ”',
        translation: 'Na casa da vovó Josette, tem cheiro de baunilha. Os canelés saem do forno: pretinhos por fora, macios por dentro. “Quer um canelé, Linu?”',
        choices: [{ text: '“ Oui, merci ! Et un deuxième, si possible ! ”', translation: '“Sim, obrigado! E um segundo, se possível!”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu mange trois canelés. Il ne part pas de Bordeaux ce soir : il reste chez Mamie Josette !',
        translation: 'O Linu come três canelés. Ele não vai embora de Bordeaux hoje à noite: fica na casa da vovó Josette!',
        ending: { tone: 'bom', title: 'Névoa e canelés', message: "O Linu andou no espelho d'água, correu na névoa e provou os canelés da vovó da Chloé." },
      },
    },
  },
  {
    id: 'fr-h8',
    level: 'A2.1',
    cefr: 'A2',
    title: "L'Aiguille du Midi",
    emoji: '🏔️',
    summary: 'Em Chamonix, o Linu sobe de teleférico até a Aiguille du Midi, de frente para o Mont Blanc.',
    cultural_context:
      'Chamonix, nos Alpes, sediou os primeiros Jogos Olímpicos de Inverno, em 1924. Da cidade, um teleférico sobe até a Aiguille du Midi, a 3 842 metros, de frente para o Mont Blanc, o ponto mais alto dos Alpes.',
    start: 'start',
    glossary: [
      ['le téléphérique', 'o teleférico'],
      ['un aller-retour', 'uma passagem de ida e volta'],
      ["Je n'ai pas de…", 'Eu não tenho… (depois da negação, “un/une/des” viram “de”)'],
      ['partir / il part', 'partir / ele parte, sai'],
      ['le glacier', 'o glaciar, a geleira'],
      ['le vide', 'o vazio, o precipício'],
      ['Si !', 'Sim! (para contradizer uma pergunta negativa)'],
    ],
    nodes: {
      start: {
        emoji: '🎫',
        text: "Chamonix, dans les Alpes. Linu veut monter à l'Aiguille du Midi, à 3 842 mètres. Au guichet, l'employé demande : “ Vous avez un billet ? ”",
        translation: 'Chamonix, nos Alpes. O Linu quer subir à Aiguille du Midi, a 3 842 metros. Na bilheteria, o funcionário pergunta: “O senhor tem ingresso?”',
        choices: [
          { text: "“ Non, je n'ai pas de billet. Un aller-retour, s'il vous plaît. ”", translation: '“Não, não tenho ingresso. Uma ida e volta, por favor.”', next: 'billet' },
        ],
      },
      billet: {
        emoji: '🧥',
        text: "“ Voilà. Le téléphérique part dans dix minutes. En haut, il fait très froid : vous avez un manteau ? ” Linu rit : “ Un manteau ? Je suis un manchot, je n'ai jamais froid ! ”",
        translation: '“Aqui está. O teleférico sai em dez minutos. Lá em cima faz muito frio: o senhor tem casaco?” O Linu ri: “Casaco? Sou um pinguim, nunca sinto frio!”',
        choices: [{ text: 'Monter dans la cabine.', translation: 'Entrar na cabine.', next: 'cabine' }],
      },
      cabine: {
        emoji: '🚡',
        text: "La cabine monte très vite. Linu a mal aux oreilles. À côté de lui, une petite fille, Jade, regarde par la fenêtre : “ Tu vois ? Les maisons sont minuscules ! ”",
        translation: 'A cabine sobe muito rápido. O Linu fica com dor de ouvido. Ao lado dele, uma menininha, a Jade, olha pela janela: “Está vendo? As casas estão minúsculas!”',
        choices: [{ text: '“ Oui ! Et nous, on va tout en haut ! ”', translation: '“Sim! E a gente vai lá para o alto!”', next: 'sommet' }],
      },
      sommet: {
        emoji: '⛰️',
        text: 'En haut, tout est blanc. En face, il y a le mont Blanc. Des alpinistes partent sur le glacier avec des cordes.',
        translation: 'Lá em cima, tudo é branco. Em frente, está o Mont Blanc. Alguns alpinistas partem pelo glaciar com cordas.',
        choices: [
          { text: 'Suivre les alpinistes sur le glacier.', translation: 'Seguir os alpinistas pelo glaciar.', next: 'guide' },
          { text: 'Aller sur la terrasse avec Jade.', translation: 'Ir ao terraço com a Jade.', next: 'vide' },
        ],
      },
      guide: {
        emoji: '🧗',
        text: "Un guide arrête Linu : “ Non, non ! On ne va pas sur le glacier sans guide et sans corde. C'est dangereux ! ”",
        translation: 'Um guia detém o Linu: “Não, não! Não se vai ao glaciar sem guia e sem corda. É perigoso!”',
        choices: [
          { text: '“ Pardon ! Je ne pars pas, je reste ici. ”', translation: '“Desculpe! Não vou, fico aqui.”', next: 'vide' },
          {
            text: '“ Merci ! Alors je pars seul. ”',
            translation: '“Obrigado! Então vou sozinho.”',
            wrong: 'O guia disse que NÃO se vai ao glaciar sem guia e sem corda: “On ne va pas… sans guide et sans corde”. Ir sozinho é justamente o que não se deve fazer!',
          },
        ],
      },
      vide: {
        emoji: '🫣',
        text: "Sur la terrasse, il y a une boîte en verre au-dessus du vide. Jade entre dedans et demande à Linu : “ Tu n'as pas peur ? ”",
        translation: 'No terraço, há uma caixa de vidro sobre o precipício. A Jade entra nela e pergunta ao Linu: “Você não tem medo?”',
        choices: [
          { text: "“ Non, je n'ai pas peur ! J'arrive ! ”", translation: '“Não, não tenho medo! Já vou!”', next: 'final_bom' },
          { text: '“ Si, un peu… Je reste sur la terrasse. ”', translation: '“Tenho, um pouco… Fico no terraço.”', next: 'final_terrasse' },
          {
            text: "“ Oui, je n'ai pas peur. ”",
            translation: '“Sim, não tenho medo.”',
            wrong: "Depois de uma pergunta negativa (“Tu n'as pas peur ?”), responde-se “Non” para confirmar (“Non, je n'ai pas peur”) ou “Si” para contradizer (“Si, j'ai peur”). “Oui” não combina com essa pergunta.",
          },
        ],
      },
      final_terrasse: {
        emoji: '🏔️',
        text: "Linu regarde le mont Blanc depuis la terrasse. Le vide, ce n'est pas pour aujourd'hui… mais la vue est magnifique !",
        translation: 'O Linu olha o Mont Blanc do terraço. O precipício fica para outro dia… mas a vista é magnífica!',
        ending: { tone: 'neutro', title: 'Com os pés no chão', message: 'O Linu viu o Mont Blanc de pertinho, mas não entrou na caixa de vidro. Tente de novo!' },
      },
      final_bom: {
        emoji: '🎉',
        text: "Linu entre dans la boîte. Sous ses pieds, il n'y a rien : seulement l'air et la neige, très loin en bas ! Jade applaudit.",
        translation: 'O Linu entra na caixa. Sob os pés dele não há nada: só o ar e a neve, muito lá embaixo! A Jade aplaude.',
        ending: { tone: 'bom', title: 'Pinguim nas alturas', message: 'O Linu respeitou o guia, ficou longe do glaciar e encarou o vazio a 3 842 metros.' },
      },
    },
  },
  {
    id: 'fr-h9',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Un cassoulet à Toulouse',
    emoji: '🫘',
    summary: 'Em Toulouse, a “cidade rosa”, o Mathis convida o Linu para fazer um cassoulet na casa dos pais dele.',
    cultural_context:
      'Toulouse é chamada de “la ville rose” por causa dos tijolos cor-de-rosa dos seus prédios, e a violeta é um dos seus símbolos. O cassoulet, ensopado de feijão-branco com linguiça e confit de pato, é típico do Sudoeste da França; Toulouse, Castelnaudary e Carcassonne disputam a receita “verdadeira”.',
    start: 'start',
    glossary: [
      ['la ville rose', 'a cidade rosa (apelido de Toulouse)'],
      ['la brique', 'o tijolo'],
      ['Tu viens ?', 'Você vem?'],
      ['on fait un cassoulet', 'a gente faz um cassoulet'],
      ['chez mes parents', 'na casa dos meus pais'],
      ['les haricots blancs', 'o feijão-branco'],
      ['cuire / ça cuit', 'cozinhar / está cozinhando'],
      ['avant / après', 'antes / depois'],
    ],
    nodes: {
      start: {
        emoji: '🧱',
        text: 'Toulouse, place du Capitole. Les murs sont roses : ici, on construit avec des briques. Linu attend son ami Mathis.',
        translation: 'Toulouse, place du Capitole. As paredes são cor-de-rosa: aqui se constrói com tijolos. O Linu espera o amigo Mathis.',
        choices: [
          { text: 'Attendre sur la place.', translation: 'Esperar na praça.', next: 'mathis' },
          { text: 'Acheter des bonbons à la violette.', translation: 'Comprar balas de violeta.', next: 'violettes' },
        ],
      },
      violettes: {
        emoji: '🪻',
        text: "Dans une boutique, Linu achète des bonbons à la violette, la fleur de Toulouse. Quand il sort, Mathis est là !",
        translation: 'Numa lojinha, o Linu compra balas de violeta, a flor de Toulouse. Quando ele sai, o Mathis está lá!',
        choices: [{ text: '“ Salut, Mathis ! Tu veux un bonbon ? ”', translation: '“Oi, Mathis! Quer uma bala?”', next: 'mathis' }],
      },
      mathis: {
        emoji: '🧑',
        text: "“ Salut ! Ce soir, on fait un cassoulet chez mes parents. Tu viens ? D'abord, on va au marché Victor-Hugo. ”",
        translation: '“Oi! Hoje à noite a gente vai fazer um cassoulet na casa dos meus pais. Você vem? Primeiro, vamos ao mercado Victor-Hugo.”',
        choices: [
          { text: '“ Oui, je viens avec plaisir ! ”', translation: '“Sim, vou com prazer!”', next: 'marche' },
          { text: '“ Non, je ne viens pas. Je suis fatigué. ”', translation: '“Não, não vou. Estou cansado.”', next: 'final_fatigue' },
        ],
      },
      final_fatigue: {
        emoji: '🛏️',
        text: "Linu rentre à l'hôtel et dort. Le lendemain, Mathis lui dit : “ Dommage ! Le cassoulet de ma mère, c'est le meilleur ! ”",
        translation: 'O Linu volta para o hotel e dorme. No dia seguinte, o Mathis diz a ele: “Que pena! O cassoulet da minha mãe é o melhor!”',
        ending: { tone: 'neutro', title: 'Cansaço de pinguim', message: 'O Linu descansou, mas perdeu o jantar tolosano. Tente de novo!' },
      },
      marche: {
        emoji: '🛒',
        text: 'Au marché, Mathis achète des haricots blancs, de la saucisse de Toulouse et du confit de canard. “ Voilà, on a tout pour le cassoulet ! ”',
        translation: 'No mercado, o Mathis compra feijão-branco, linguiça de Toulouse e confit de pato. “Pronto, temos tudo para o cassoulet!”',
        choices: [
          { text: '“ Super ! On rentre chez toi ? ”', translation: '“Ótimo! Vamos para a sua casa?”', next: 'cuisine' },
          {
            text: '“ Et le poisson ? On ne prend pas de poisson ? ”',
            translation: '“E o peixe? Não vamos levar peixe?”',
            wrong: 'O Mathis disse “on a tout”: já têm TUDO para o cassoulet (feijão-branco, linguiça e confit de pato). O cassoulet não leva peixe!',
          },
        ],
      },
      cuisine: {
        emoji: '🍲',
        text: 'Chez Mathis, sa mère prépare le cassoulet dans un grand plat. Elle explique : “ Le cassoulet cuit lentement. On ne mange pas avant neuf heures ! ”',
        translation: 'Na casa do Mathis, a mãe dele prepara o cassoulet numa travessa grande. Ela explica: “O cassoulet cozinha devagar. Não se come antes das nove!”',
        choices: [
          { text: "“ Neuf heures ? D'accord, j'attends ! ”", translation: '“Nove horas? Tudo bem, eu espero!”', next: 'attente' },
          {
            text: '“ Super, on mange tout de suite ! ”',
            translation: '“Ótimo, vamos comer agora mesmo!”',
            wrong: 'A mãe do Mathis disse “On ne mange pas avant neuf heures”: NÃO se come antes das nove. O cassoulet precisa de horas no forno.',
          },
        ],
      },
      attente: {
        emoji: '🃏',
        text: 'Mathis et Linu font une partie de cartes. Enfin, à neuf heures, la mère ouvre le four : le cassoulet a une croûte dorée.',
        translation: 'O Mathis e o Linu jogam uma partida de cartas. Finalmente, às nove horas, a mãe abre o forno: o cassoulet tem uma crosta dourada.',
        choices: [{ text: '“ Mmm, ça sent bon ! ”', translation: '“Hum, que cheiro bom!”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: "Toute la famille mange. Linu finit son assiette et en demande encore ! Le père de Mathis rit : “ Tu es un vrai Toulousain ! ”",
        translation: 'A família inteira come. O Linu termina o prato e ainda pede mais! O pai do Mathis ri: “Você é um verdadeiro tolosano!”',
        ending: { tone: 'bom', title: 'Um verdadeiro tolosano', message: 'O Linu foi ao mercado, esperou com paciência e jantou o cassoulet da família do Mathis.' },
      },
    },
  },
  // ───────────────────────── A2.2 ─────────────────────────
  {
    id: 'fr-h10',
    level: 'A2.2',
    cefr: 'A2',
    title: "Sur le pont d'Avignon",
    emoji: '🎭',
    summary: 'Em pleno Festival de Avignon, o Linu encontra a Camille na ponte famosa da cantiga e acaba a noite no palácio dos Papas.',
    cultural_context:
      "A ponte Saint-Bénezet, do século XII, perdeu a maior parte dos seus arcos nas cheias do Ródano: hoje restam só quatro, e ela termina no meio do rio. Ficou famosa pela cantiga “Sur le pont d'Avignon”. Desde 1947, o Festival de Avignon ocupa a cidade em julho, com peças até no pátio do palácio dos Papas, onde os papas moraram no século XIV.",
    start: 'start',
    glossary: [
      ['il est arrivé / elle est arrivée', 'ele chegou / ela chegou (com être, o particípio concorda)'],
      ['elles sont allées', 'elas foram'],
      ['cassé / cassée', 'quebrado / quebrada'],
      ['le Rhône', 'o rio Ródano'],
      ['mes cousines', 'as minhas primas'],
      ['on va voir une pièce', 'a gente vai ver uma peça (futur proche)'],
      ['la cour', 'o pátio'],
      ['le palais des Papes', 'o palácio dos Papas'],
    ],
    nodes: {
      start: {
        emoji: '📱',
        text: "Hier, Linu est arrivé à Avignon pour le festival de théâtre. Ce matin, son amie Camille a écrit : “ Je suis allée chercher nos billets. Rendez-vous sur le pont à dix heures ! ”",
        translation: 'Ontem o Linu chegou a Avignon para o festival de teatro. Hoje de manhã, a amiga dele, a Camille, escreveu: “Fui buscar os nossos ingressos. Encontro na ponte às dez!”',
        choices: [
          { text: 'Aller tout de suite au pont.', translation: 'Ir já para a ponte.', next: 'pont' },
          { text: "Prendre un grand petit-déjeuner d'abord.", translation: 'Tomar um belo café da manhã antes.', next: 'cafe' },
        ],
      },
      cafe: {
        emoji: '🥐',
        text: "Linu a mangé trois croissants et il a bu un grand chocolat. Il est arrivé au pont à onze heures. Camille est partie ! Elle a laissé un petit mot : “ Tu vas voir la pièce tout seul… ”",
        translation: 'O Linu comeu três croissants e tomou um chocolate grande. Chegou à ponte às onze. A Camille foi embora! Ela deixou um bilhetinho: “Você vai ver a peça sozinho…”',
        ending: { tone: 'neutro', title: 'Café da manhã demorado', message: 'O Linu chegou uma hora atrasado e a Camille não esperou. Tente de novo!' },
      },
      pont: {
        emoji: '🌉',
        text: "Le pont est très vieux et il est cassé : il s'arrête au milieu du Rhône ! Une dame chante : “ Sur le pont d'Avignon, on y danse… ” Camille n'est pas encore arrivée.",
        translation: "A ponte é muito velha e está quebrada: ela termina no meio do Ródano! Uma senhora canta: “Sur le pont d'Avignon, on y danse…” A Camille ainda não chegou.",
        choices: [
          { text: 'Danser avec la dame en attendant Camille.', translation: 'Dançar com a senhora enquanto espera a Camille.', next: 'danse' },
          {
            text: "Traverser le pont jusqu'à l'autre rive.",
            translation: 'Atravessar a ponte até a outra margem.',
            wrong: "O texto disse que a ponte está quebrada (“il est cassé”) e termina no meio do rio (“il s'arrête au milieu du Rhône”). Não dá para atravessar!",
          },
        ],
      },
      danse: {
        emoji: '💃',
        text: "Linu a dansé avec la dame et les touristes ont applaudi. Puis Camille est arrivée avec deux billets : “ Ce soir, on va voir une pièce dans la cour du palais des Papes ! ”",
        translation: 'O Linu dançou com a senhora e os turistas aplaudiram. Depois a Camille chegou com dois ingressos: “Hoje à noite vamos ver uma peça no pátio do palácio dos Papas!”',
        choices: [{ text: "“ Génial ! Et qu'est-ce qu'on va faire avant ? ”", translation: '“Genial! E o que vamos fazer antes?”', next: 'cousines' }],
      },
      cousines: {
        emoji: '👭',
        text: "“ Mes cousines sont venues de Lyon. Elles sont allées aux Halles acheter un pique-nique. On va les retrouver ? ”",
        translation: '“As minhas primas vieram de Lyon. Elas foram ao mercado Les Halles comprar um piquenique. Vamos encontrá-las?”',
        choices: [
          { text: '“ Oui ! On va retrouver tes cousines aux Halles. ”', translation: '“Sim! Vamos encontrar as suas primas no Les Halles.”', next: 'halles' },
          {
            text: '“ Oui ! Ton cousin est venu tout seul ? ”',
            translation: '“Sim! O seu primo veio sozinho?”',
            wrong: 'A Camille falou de “mes cousines” (primAS, no plural) e disse “elles sont venues… elles sont allées”. Com o verbo être, o particípio concorda com o sujeito: o “-es” mostra que são várias mulheres.',
          },
        ],
      },
      halles: {
        emoji: '🧺',
        text: "Les cousines, Zoé et Lina, ont acheté des olives, du fromage de chèvre et de belles tomates. Tous ensemble, ils ont mangé dans le beau jardin du Rocher des Doms.",
        translation: 'As primas, a Zoé e a Lina, compraram azeitonas, queijo de cabra e tomates bonitos. Todos juntos, eles comeram no belo jardim do Rocher des Doms.',
        choices: [{ text: 'Aller au spectacle.', translation: 'Ir ao espetáculo.', next: 'soir' }],
      },
      soir: {
        emoji: '🌙',
        text: 'Le soir, ils sont entrés dans la cour du palais des Papes. Les acteurs ont joué sous les étoiles pendant trois heures.',
        translation: 'À noite, eles entraram no pátio do palácio dos Papas. Os atores atuaram sob as estrelas durante três horas.',
        choices: [{ text: "Regarder la pièce jusqu'à la fin.", translation: 'Assistir à peça até o fim.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: "À minuit, le public a applaudi longtemps. Linu a dit à Camille : “ C'est ma plus belle soirée de l'été ! ”",
        translation: 'À meia-noite, o público aplaudiu por muito tempo. O Linu disse à Camille: “É a noite mais bonita do meu verão!”',
        ending: { tone: 'bom', title: 'Teatro sob as estrelas', message: 'O Linu dançou na ponte, fez piquenique com as primas da Camille e viu uma peça no palácio dos Papas.' },
      },
    },
  },
  {
    id: 'fr-h11',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Le bel escalier de Chambord',
    emoji: '🏰',
    summary: 'No castelo de Chambord, no vale do Loire, o Linu e o Jules testam a famosa escada dupla.',
    cultural_context:
      'O castelo de Chambord, no vale do Loire, começou a ser construído em 1519 para o rei Francisco I. A sua escada de dupla hélice permite que duas pessoas subam e desçam sem se cruzar; a ideia é muitas vezes atribuída a Leonardo da Vinci, que passou os últimos anos de vida ali perto, em Amboise. O vale do Loire é Patrimônio Mundial da UNESCO.',
    start: 'start',
    glossary: [
      ['beau / bel / belle', 'bonito (bel antes de vogal: un bel escalier)'],
      ['vieux / vieil / vieille', 'velho (vieil antes de vogal)'],
      ["il est monté / il a monté l'escalier", 'ele subiu / ele subiu a escada (com objeto, usa-se avoir)'],
      ['se croiser', 'cruzar-se, encontrar-se no caminho'],
      ['la cheminée', 'a chaminé, a lareira'],
      ['on va essayer', 'vamos tentar (futur proche)'],
      ['la tarte Tatin', 'torta de maçã caramelizada, invertida'],
    ],
    nodes: {
      start: {
        emoji: '🚲',
        text: 'Samedi dernier, Linu et son ami Jules sont allés au château de Chambord. Ils ont loué des vélos et ils ont traversé la grande forêt du domaine.',
        translation: 'No sábado passado, o Linu e o amigo Jules foram ao castelo de Chambord. Eles alugaram bicicletas e atravessaram a grande floresta da propriedade.',
        choices: [
          { text: 'Entrer dans le château.', translation: 'Entrar no castelo.', next: 'entree' },
          { text: 'Faire encore un tour à vélo.', translation: 'Dar mais uma volta de bicicleta.', next: 'foret' },
        ],
      },
      foret: {
        emoji: '🦌',
        text: "Ils ont roulé tout l'après-midi et ils ont vu des cerfs. Mais à six heures, le château a fermé ses portes !",
        translation: 'Eles pedalaram a tarde toda e viram cervos. Mas às seis horas o castelo fechou as portas!',
        ending: { tone: 'neutro', title: 'Só a floresta', message: 'Um belo passeio no bosque, mas o Linu não viu a famosa escada. Tente de novo!' },
      },
      entree: {
        emoji: '🏰',
        text: "Devant le château, Jules a dit : “ Regarde ce bel édifice ! C'est le château du roi François Ier. ” Linu a compté les tours et les cheminées, mais il a abandonné : il y en a trop !",
        translation: 'Em frente ao castelo, o Jules disse: “Olha que belo edifício! É o castelo do rei Francisco I.” O Linu contou as torres e as chaminés, mas desistiu: são demais!',
        choices: [{ text: 'Entrer et chercher le grand escalier.', translation: 'Entrar e procurar a grande escada.', next: 'escalier' }],
      },
      escalier: {
        emoji: '🌀',
        text: "Au centre, il y a un escalier extraordinaire : deux escaliers qui tournent l'un autour de l'autre. Le guide a expliqué : “ Deux personnes peuvent monter et descendre sans jamais se croiser. ”",
        translation: 'No centro há uma escada extraordinária: duas escadas que giram uma em volta da outra. O guia explicou: “Duas pessoas podem subir e descer sem nunca se cruzar.”',
        choices: [
          { text: '“ Jules, on va essayer ? Toi à gauche, moi à droite ! ”', translation: '“Jules, vamos tentar? Você à esquerda, eu à direita!”', next: 'jeu' },
          {
            text: '“ Alors on va se rencontrer au milieu ! ”',
            translation: '“Então vamos nos encontrar no meio!”',
            wrong: 'O guia explicou que duas pessoas sobem e descem “sans jamais se croiser”, sem NUNCA se cruzar. Essa é justamente a graça da escada dupla!',
          },
        ],
      },
      jeu: {
        emoji: '🪟',
        text: "Linu est monté par un escalier, Jules par l'autre. Ils se sont vus par les petites fenêtres, mais ils ne se sont pas rencontrés ! En haut, Jules n'est pas là.",
        translation: 'O Linu subiu por uma escada, o Jules pela outra. Eles se viram pelas janelinhas, mas não se encontraram! Lá em cima, o Jules não está.',
        choices: [
          { text: 'Attendre Jules sur la terrasse.', translation: 'Esperar o Jules no terraço.', next: 'terrasse' },
          { text: 'Redescendre pour chercher Jules.', translation: 'Descer de novo para procurar o Jules.', next: 'perdu' },
        ],
      },
      perdu: {
        emoji: '😵‍💫',
        text: "Linu est redescendu… mais Jules, lui, est remonté ! Ils ont tourné dans l'escalier pendant une heure sans jamais se trouver.",
        translation: 'O Linu desceu de novo… mas o Jules, por sua vez, subiu de novo! Eles rodaram na escada por uma hora sem nunca se achar.',
        ending: { tone: 'neutro', title: 'Pinguim tonto', message: 'A escada de Chambord venceu: o Linu e o Jules passaram uma hora se desencontrando. Tente de novo!' },
      },
      terrasse: {
        emoji: '🏯',
        text: "Jules est arrivé cinq minutes après. “ Tu as vu ? On a monté le même escalier, mais pas ensemble ! ” Devant eux, il y a une vue magnifique sur les toits et les tours.",
        translation: 'O Jules chegou cinco minutos depois. “Viu só? Subimos a mesma escada, mas não juntos!” Diante deles, há uma vista magnífica dos telhados e das torres.',
        choices: [
          { text: "“ Quelle belle vue ! Qu'est-ce qu'on va faire maintenant ? ”", translation: '“Que vista bonita! O que vamos fazer agora?”', next: 'final_bom' },
          {
            text: "“ Pourquoi tu n'es pas monté ? ”",
            translation: '“Por que você não subiu?”',
            wrong: 'O Jules subiu, sim! Ele disse “On a monté le même escalier”: os dois subiram a mesma escada, só que não juntos.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: "Jules a répondu : “ On va manger une tarte Tatin ! Elle est née tout près d'ici, en Sologne. ” Et Linu a pris sa plus belle photo : un bel escalier, un vieil ami et un beau château.",
        translation: 'O Jules respondeu: “Vamos comer uma tarte Tatin! Ela nasceu bem perto daqui, na Sologne.” E o Linu tirou a sua foto mais bonita: uma bela escada, um velho amigo e um belo castelo.',
        ending: { tone: 'bom', title: 'Encontro no alto', message: 'O Linu testou a escada dupla, esperou o amigo no terraço e ainda ganhou uma tarte Tatin.' },
      },
    },
  },
  {
    id: 'fr-h12',
    level: 'A2.2',
    cefr: 'A2',
    title: 'La Braderie de Lille',
    emoji: '🦪',
    summary: 'Na Braderie de Lille, o Linu e a vizinha, a Sra. Dupont, garimpam tesouros e comem mexilhões com fritas.',
    cultural_context:
      'A Braderie de Lille, no primeiro fim de semana de setembro, é uma das maiores feiras de pulgas da Europa e tem origem na Idade Média. A tradição é comer “moules-frites” (mexilhões com batata frita), e os restaurantes empilham as cascas vazias na calçada para ver quem faz a maior montanha.',
    start: 'start',
    glossary: [
      ['la braderie', 'a feira de rua, de objetos usados'],
      ['un vieil appareil photo', 'uma câmera fotográfica velha'],
      ['un beau miroir / une belle lampe', 'um belo espelho / uma bela luminária'],
      ['votre fils / votre fille', 'o seu filho / a sua filha (formal)'],
      ['les moules-frites', 'mexilhões com batata frita'],
      ['la coquille', 'a casca, a concha'],
      ['on va manger', 'vamos comer (futur proche)'],
    ],
    nodes: {
      start: {
        emoji: '🏘️',
        text: 'Le premier week-end de septembre, Linu est allé à la Braderie de Lille avec sa voisine, Mme Dupont. Des milliers de vendeurs ont installé leurs tables dans les rues.',
        translation: 'No primeiro fim de semana de setembro, o Linu foi à Braderie de Lille com a vizinha, a Sra. Dupont. Milhares de vendedores montaram as suas mesas nas ruas.',
        choices: [
          { text: 'Chercher des trésors avec Mme Dupont.', translation: 'Procurar tesouros com a Sra. Dupont.', next: 'brocante' },
          { text: 'Partir seul dans la foule.', translation: 'Sair sozinho no meio da multidão.', next: 'foule' },
        ],
      },
      foule: {
        emoji: '👥',
        text: "Il y a trop de monde ! Linu a perdu sa voisine et il a passé l'après-midi à la chercher entre les tables.",
        translation: 'Tem gente demais! O Linu perdeu a vizinha e passou a tarde procurando por ela entre as mesas.',
        ending: { tone: 'neutro', title: 'Perdido na multidão', message: 'Na Braderie, é fácil se perder! O Linu não comprou nada nem comeu os mexilhões. Tente de novo!' },
      },
      brocante: {
        emoji: '🪞',
        text: "Mme Dupont a trouvé une belle lampe et un vieux miroir. Linu, lui, a vu un vieil appareil photo : “ Il est vraiment beau ! Combien est-ce qu'il coûte ? ”",
        translation: 'A Sra. Dupont encontrou uma bela luminária e um espelho velho. O Linu, por sua vez, viu uma câmera velha: “Ela é linda mesmo! Quanto custa?”',
        choices: [{ text: 'Écouter la réponse du vendeur.', translation: 'Ouvir a resposta do vendedor.', next: 'vendeur' }],
      },
      vendeur: {
        emoji: '📷',
        text: "Le vendeur a souri : “ Quinze euros. Mais pour un bel oiseau comme vous, dix euros ! ”",
        translation: 'O vendedor sorriu: “Quinze euros. Mas para uma ave bonita como o senhor, dez euros!”',
        choices: [
          { text: "“ Dix euros ? D'accord, je le prends ! ”", translation: '“Dez euros? Combinado, vou levar!”', next: 'moules' },
          {
            text: "“ Vingt euros ? C'est trop cher ! ”",
            translation: '“Vinte euros? É caro demais!”',
            wrong: 'O vendedor disse quinze euros (“quinze”) e depois ainda baixou para dez (“dix euros”). Ninguém falou em vinte!',
          },
        ],
      },
      moules: {
        emoji: '👩',
        text: "À midi, Mme Dupont a dit : “ Ma fille Élise est venue nous retrouver. Elle est allée réserver une table. On va manger des moules-frites ! ”",
        translation: 'Ao meio-dia, a Sra. Dupont disse: “A minha filha Élise veio nos encontrar. Ela foi reservar uma mesa. Vamos comer mexilhões com fritas!”',
        choices: [
          { text: "“ Super ! Où est-ce qu'elle nous attend ? ”", translation: '“Ótimo! Onde ela está esperando a gente?”', next: 'coquilles' },
          {
            text: '“ Votre fils est venu aussi ? Où est-il ? ”',
            translation: '“O seu filho veio também? Onde ele está?”',
            wrong: 'A Sra. Dupont falou da FILHA: “ma fille Élise est venue… elle est allée”. Com être, o particípio concorda com o sujeito: venue, allée (feminino).',
          },
        ],
      },
      coquilles: {
        emoji: '⛰️',
        text: "Élise les attend devant un restaurant. Sur le trottoir, il y a une montagne de coquilles vides ! Élise explique : “ Chaque restaurant fait sa montagne. La plus haute gagne ! ”",
        translation: 'A Élise espera por eles em frente a um restaurante. Na calçada, há uma montanha de cascas vazias! A Élise explica: “Cada restaurante faz a sua montanha. A mais alta ganha!”',
        choices: [{ text: '“ Alors on va aider ce restaurant à gagner ! ”', translation: '“Então vamos ajudar este restaurante a ganhar!”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: "Linu a mangé une grande casserole de moules. Le soir, il est rentré avec son vieil appareil photo. Sa première photo ? La belle montagne de coquilles de leur restaurant !",
        translation: 'O Linu comeu uma panela grande de mexilhões. À noite, voltou para casa com a sua câmera velha. A primeira foto? A bela montanha de cascas do restaurante deles!',
        ending: { tone: 'bom', title: 'Tesouros da Braderie', message: 'O Linu garimpou uma câmera antiga, pechinchou bem e ajudou a montanha de conchas a crescer.' },
      },
    },
  },
  // ───────────────────────── B1.1 ─────────────────────────
  {
    id: 'fr-h13',
    level: 'B1.1',
    cefr: 'B1',
    title: "L'escalier du roi d'Aragon",
    emoji: '🪜',
    summary: 'Em Bonifacio, na Córsega, a Anna mostra ao Linu a escada lendária cavada na falésia.',
    cultural_context:
      'Bonifacio, no extremo sul da Córsega, fica no alto de falésias de calcário branco, diante da Sardenha, a pouco mais de 10 km. Diz a lenda que a escada do rei de Aragão, com 187 degraus cavados na falésia, foi aberta numa só noite pelos soldados aragoneses durante o cerco de 1420.',
    start: 'start',
    glossary: [
      ['il faisait chaud', 'fazia calor (imparfait: descrição)'],
      ['Montre-le-moi !', 'Mostre-o para mim! (imperativo + pronomes)'],
      ['la falaise', 'a falésia'],
      ['le siège', 'o cerco (e também o assento)'],
      ["Il y en a cent quatre-vingt-sept.", 'Há 187 (deles). (“en” = de degraus)'],
      ['la marche', 'o degrau'],
      ['Ne te baigne pas ! / Baigne-toi !', 'Não entre na água! / Entre na água!'],
      ['la crique', 'a enseada, a prainha'],
    ],
    nodes: {
      start: {
        emoji: '☀️',
        text: "Quand Linu est arrivé à Bonifacio, il faisait très chaud et la mer brillait sous les falaises blanches. Son amie Anna l'attendait au port. “ Viens ! Je vais te montrer l'escalier du roi d'Aragon. ”",
        translation: 'Quando o Linu chegou a Bonifacio, fazia muito calor e o mar brilhava sob as falésias brancas. A amiga dele, a Anna, o esperava no porto. “Vem! Vou te mostrar a escada do rei de Aragão.”',
        choices: [
          { text: "“ Montre-le-moi ! C'est loin ? ”", translation: '“Mostra para mim! É longe?”', next: 'vieille_ville' },
          { text: "“ Faisons d'abord un tour en bateau ! ”", translation: '“Vamos dar primeiro uma volta de barco!”', next: 'bateau' },
          { text: "“ Plus tard… Je vais d'abord faire la sieste. ”", translation: '“Mais tarde… Primeiro vou tirar uma soneca.”', next: 'sieste' },
        ],
      },
      sieste: {
        emoji: '😴',
        text: "Linu est allé à l'hôtel pour dormir un peu. Quand il s'est réveillé, il faisait nuit et l'escalier était fermé. Anna lui a envoyé un message : “ Dommage ! Demain, peut-être ? ”",
        translation: 'O Linu foi ao hotel dormir um pouco. Quando acordou, já era noite e a escada estava fechada. A Anna lhe mandou uma mensagem: “Que pena! Amanhã, quem sabe?”',
        ending: { tone: 'neutro', title: 'Uma longa soneca', message: 'A siesta corsa venceu o Linu: ele perdeu a escada e o pôr do sol. Tente de novo!' },
      },
      bateau: {
        emoji: '⛵',
        text: "Ils ont pris un petit bateau. Les falaises étaient immenses, et la vieille ville semblait suspendue au-dessus du vide. Anna a montré une terre au loin : “ Tu la vois ? C'est la Sardaigne ! ”",
        translation: 'Eles pegaram um barquinho. As falésias eram imensas, e a cidade velha parecia suspensa sobre o precipício. A Anna apontou uma terra ao longe: “Está vendo? É a Sardenha!”',
        choices: [{ text: "Retourner au port et monter vers l'escalier.", translation: 'Voltar ao porto e subir em direção à escada.', next: 'vieille_ville' }],
      },
      vieille_ville: {
        emoji: '🏘️',
        text: "Ils sont montés dans la vieille ville, entre les maisons hautes et étroites. Anna a raconté la légende : “ En 1420, pendant un siège, les soldats du roi d'Aragon ont creusé cet escalier dans la falaise… en une seule nuit ! ”",
        translation: 'Eles subiram até a cidade velha, entre as casas altas e estreitas. A Anna contou a lenda: “Em 1420, durante um cerco, os soldados do rei de Aragão cavaram esta escada na falésia… numa só noite!”',
        choices: [
          { text: "“ En une nuit ? Je n'y crois pas ! Allons la voir. ”", translation: '“Numa noite? Não acredito! Vamos vê-la.”', next: 'escalier' },
          {
            text: "“ Ils l'ont creusé en un an ? C'est rapide ! ”",
            translation: '“Eles a cavaram em um ano? Que rápido!”',
            wrong: 'A Anna disse “en une seule nuit”: segundo a lenda, a escada foi cavada numa só NOITE, não em um ano.',
          },
        ],
      },
      escalier: {
        emoji: '🪜',
        text: "L'escalier descendait tout droit vers la mer. “ Il y a combien de marches ? ” a demandé Linu. “ Il y en a cent quatre-vingt-sept. Prends de l'eau, il fait chaud ! ”",
        translation: 'A escada descia reto em direção ao mar. “Quantos degraus tem?”, perguntou o Linu. “Tem cento e oitenta e sete. Leva água, está calor!”',
        choices: [
          { text: "“ J'en ai déjà une bouteille. Allons-y ! ”", translation: '“Já tenho uma garrafa. Vamos lá!”', next: 'descente' },
          {
            text: "“ Pas besoin d'eau, il y en a seulement dix-sept ! ”",
            translation: '“Não precisa de água, são só dezessete!”',
            wrong: 'A Anna disse “il y en a cent quatre-vingt-sept”: são 187 degraus, não 17. O “en” substitui “de marches”.',
          },
        ],
      },
      descente: {
        emoji: '🌊',
        text: "En bas, il n'y avait personne. L'eau était si claire qu'on voyait les poissons. Anna a dit : “ Ne te baigne pas ici, c'est trop profond. Baigne-toi plutôt dans la petite crique, là-bas. ”",
        translation: 'Lá embaixo não havia ninguém. A água era tão clara que dava para ver os peixes. A Anna disse: “Não entre na água aqui, é fundo demais. Entre na enseada pequena, ali.”',
        choices: [
          { text: 'Nager dans la petite crique.', translation: 'Nadar na enseada pequena.', next: 'crique' },
          {
            text: 'Plonger tout de suite, là où il est.',
            translation: 'Mergulhar imediatamente, ali mesmo onde ele está.',
            wrong: 'A Anna disse “Ne te baigne pas ici” (não entre na água aqui, é fundo demais) e indicou a enseada: “Baigne-toi plutôt dans la petite crique”.',
          },
        ],
      },
      crique: {
        emoji: '🐠',
        text: "Linu a nagé avec les poissons pendant une heure. Quand il est sorti de l'eau, les cent quatre-vingt-sept marches l'attendaient. Il était fatigué, mais il a souri.",
        translation: 'O Linu nadou com os peixes durante uma hora. Quando saiu da água, os cento e oitenta e sete degraus o esperavam. Ele estava cansado, mas sorriu.',
        choices: [{ text: 'Remonter doucement, marche après marche.', translation: 'Subir de novo devagar, degrau por degrau.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: "En haut, Anna lui a offert un canistrellu, un biscuit corse. “ Tu l'as fait ! Maintenant, tu connais les secrets de Bonifacio. ” Linu lui a répondu : “ Pas tous : je vais y revenir ! ”",
        translation: 'Lá em cima, a Anna lhe ofereceu um canistrellu, um biscoito corso. “Você conseguiu! Agora você conhece os segredos de Bonifacio.” O Linu respondeu: “Nem todos: vou voltar aqui!”',
        ending: { tone: 'bom', title: '187 degraus', message: 'O Linu desceu a escada lendária, nadou onde a Anna indicou e subiu tudo de novo.' },
      },
    },
  },
  {
    id: 'fr-h14',
    level: 'B1.1',
    cefr: 'B1',
    title: "Les falaises d'Étretat",
    emoji: '🪨',
    summary: 'Em Étretat, na Normandia, o avô da Louise conta histórias das falésias e dá um conselho sobre a maré.',
    cultural_context:
      "As falésias brancas de Étretat, na Normandia, com os seus arcos naturais e a “Aiguille” (agulha), foram pintadas várias vezes por Claude Monet. O escritor Maurice Leblanc, que morou na cidade, fez da Aiguille o esconderijo de Arsène Lupin no romance “L'Aiguille creuse” (1909). Na maré alta, o mar chega ao pé das falésias.",
    start: 'start',
    glossary: [
      ['je venais ici tous les étés', 'eu vinha aqui todo verão (imparfait: hábito)'],
      ['Monet les a peintes', 'Monet as pintou (particípio concorda com o COD anteposto)'],
      ['la marée haute', 'a maré alta'],
      ["Ne passez pas sous l'arche !", 'Não passem por baixo do arco!'],
      ['le galet', 'o seixo, a pedra redonda da praia'],
      ['Elle lui en a donné un.', 'Ela lhe deu um (deles).'],
      ['la mouette', 'a gaivota'],
      ['Garde-le !', 'Fique com ele!'],
    ],
    nodes: {
      start: {
        emoji: '🏡',
        text: "Linu passait le week-end à Étretat, chez le grand-père de son amie Louise. Ce matin-là, le ciel était bleu et on entendait la mer depuis la cuisine. Le grand-père préparait le café.",
        translation: 'O Linu passava o fim de semana em Étretat, na casa do avô da amiga Louise. Naquela manhã, o céu estava azul e dava para ouvir o mar da cozinha. O avô preparava o café.',
        choices: [
          { text: 'Prendre le petit-déjeuner avec lui.', translation: 'Tomar o café da manhã com ele.', next: 'grandpere' },
          { text: 'Partir seul à la plage tout de suite.', translation: 'Ir sozinho à praia imediatamente.', next: 'seul' },
        ],
      },
      seul: {
        emoji: '🥾',
        text: "Linu a marché longtemps sur les galets. Ils étaient ronds et durs, et ses pieds lui faisaient mal. Il est rentré avant midi, sans avoir vu les falaises de près.",
        translation: 'O Linu caminhou muito tempo sobre os seixos. Eles eram redondos e duros, e os pés dele doíam. Ele voltou antes do meio-dia, sem ter visto as falésias de perto.',
        ending: { tone: 'neutro', title: 'Pés doloridos', message: 'Sem o avô e a Louise, o passeio perdeu a graça. Tente de novo!' },
      },
      grandpere: {
        emoji: '👴',
        text: "“ Quand j'étais petit, je venais ici tous les étés. Je montais sur la falaise avec mon père et on regardait les bateaux. Tu sais, Monet a peint ces falaises : il les a peintes plusieurs fois ! ”",
        translation: '“Quando eu era pequeno, vinha aqui todo verão. Subia a falésia com o meu pai e a gente ficava olhando os barcos. Sabe, Monet pintou estas falésias: pintou-as várias vezes!”',
        choices: [
          { text: '“ Vous veniez tous les étés ? Vous avez de la chance ! ”', translation: '“O senhor vinha todo verão? Que sorte!”', next: 'conseil' },
          {
            text: '“ Alors vous êtes venu ici une seule fois ? ”',
            translation: '“Então o senhor veio aqui uma vez só?”',
            wrong: 'O avô disse “je venais ici tous les étés”: o imparfait mostra um hábito, algo que ele fazia todo verão, e não uma vez só.',
          },
        ],
      },
      conseil: {
        emoji: '🕓',
        text: "Le grand-père leur a donné un conseil : “ À marée haute, la mer arrive jusqu'aux falaises. Regardez bien l'heure et ne passez pas sous l'arche après quatre heures ! ”",
        translation: 'O avô lhes deu um conselho: “Na maré alta, o mar chega até as falésias. Prestem atenção na hora e não passem por baixo do arco depois das quatro!”',
        choices: [{ text: "“ C'est promis ! On vous écoute. ”", translation: '“Prometido! A gente vai obedecer ao senhor.”', next: 'falaise' }],
      },
      falaise: {
        emoji: '🌬️',
        text: "Louise et Linu sont d'abord montés sur la falaise. Le vent soufflait fort et les mouettes criaient. Louise lui a montré l'Aiguille : “ Tu la vois ? Dans un roman, Arsène Lupin y cachait un trésor ! ”",
        translation: 'A Louise e o Linu subiram primeiro a falésia. O vento soprava forte e as gaivotas gritavam. A Louise mostrou a Aiguille para ele: “Está vendo? Num romance, o Arsène Lupin escondia um tesouro lá dentro!”',
        choices: [{ text: '“ Un trésor ? Allons le chercher sur la plage ! ”', translation: '“Um tesouro? Vamos procurá-lo na praia!”', next: 'plage' }],
      },
      plage: {
        emoji: '🏖️',
        text: "Sur la plage, ils ont ramassé de jolis galets, et Louise en a donné un à Linu. Tout à coup, elle a regardé sa montre : “ Il est quatre heures et demie ! On passe sous l'arche pour voir l'autre plage ? ”",
        translation: 'Na praia, eles juntaram seixos bonitos, e a Louise deu um ao Linu. De repente, ela olhou o relógio: “São quatro e meia! Vamos passar por baixo do arco para ver a outra praia?”',
        choices: [
          { text: "“ Non ! Ton grand-père nous l'a interdit. Rentrons. ”", translation: '“Não! O seu avô nos proibiu. Vamos voltar.”', next: 'retour' },
          { text: "“ D'accord, allons-y vite ! ”", translation: '“Tá bom, vamos rápido!”', next: 'piege' },
          {
            text: "“ Il est seulement trois heures, on a le temps. ”",
            translation: '“São só três horas, dá tempo.”',
            wrong: 'A Louise disse “quatre heures et demie” (quatro e meia): já passou das quatro, justamente o horário que o avô proibiu.',
          },
        ],
      },
      piege: {
        emoji: '🌊',
        text: "Sous l'arche, l'eau montait déjà. Ils ont dû courir, mouillés jusqu'aux genoux. Le grand-père les attendait sur la digue, pas content du tout.",
        translation: 'Debaixo do arco, a água já estava subindo. Eles tiveram que correr, molhados até os joelhos. O avô os esperava no calçadão, nada contente.',
        ending: { tone: 'neutro', title: 'A maré não espera', message: 'Eles escaparam, mas desobedeceram ao conselho do avô. Tente de novo!' },
      },
      retour: {
        emoji: '🖼️',
        text: "Le grand-père était fier d'eux : “ Vous m'avez écouté, bravo ! ” Il leur a montré ses vieux dessins des falaises : il les faisait quand il était jeune.",
        translation: 'O avô ficou orgulhoso deles: “Vocês me ouviram, parabéns!” Ele lhes mostrou os seus desenhos antigos das falésias: ele os fazia quando era jovem.',
        choices: [{ text: "“ Ils sont magnifiques ! Vous pouvez m'en donner un ? ”", translation: '“São magníficos! O senhor pode me dar um?”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: "Le grand-père lui en a donné un : l'Aiguille au coucher du soleil. “ Garde-le, et reviens nous voir ! ” De retour chez lui, Linu l'a accroché au-dessus de son lit.",
        translation: 'O avô lhe deu um: a Aiguille ao pôr do sol. “Fique com ele e volte para nos ver!” De volta para casa, o Linu o pendurou em cima da cama.',
        ending: { tone: 'bom', title: 'Um presente de Étretat', message: 'O Linu ouviu as histórias do avô, respeitou a maré e ganhou um desenho das falésias.' },
      },
    },
  },
  {
    id: 'fr-h15',
    level: 'B1.1',
    cefr: 'B1',
    title: 'La bataille de fleurs',
    emoji: '💐',
    summary: 'No Carnaval de Nice, o Linu apanha flores na batalha da promenade des Anglais e aprende a dividi-las.',
    cultural_context:
      'O Carnaval de Nice, em fevereiro, é um dos mais famosos do mundo. Nas “batailles de fleurs” (batalhas de flores), que acontecem desde o século XIX, pessoas fantasiadas sobre carros alegóricos cobertos de flores jogam mimosas e outras flores para o público na promenade des Anglais. A socca, panqueca fina de farinha de grão-de-bico, é o petisco típico da cidade.',
    start: 'start',
    glossary: [
      ['le char', 'o carro alegórico'],
      ['Attrape-les !', 'Pegue-as! (imperativo + COD)'],
      ['Donne-lui ton mimosa !', 'Dê a ela a sua mimosa! (lui = a ela / a ele)'],
      ['Tu en as trois.', 'Você tem três (delas).'],
      ["N'y va pas sans moi !", 'Não vá lá sem mim!'],
      ["l'œillet", 'o cravo'],
      ['la socca', 'panqueca de grão-de-bico, típica de Nice'],
      ['le défilé de nuit', 'o desfile noturno'],
    ],
    nodes: {
      start: {
        emoji: '🌴',
        text: "En février, Linu est allé au carnaval de Nice. Il faisait doux, comme souvent sur la Côte d'Azur. Sur la promenade des Anglais, des chars couverts de fleurs avançaient lentement.",
        translation: "Em fevereiro, o Linu foi ao carnaval de Nice. O tempo estava ameno, como muitas vezes na Côte d'Azur. Na promenade des Anglais, carros alegóricos cobertos de flores avançavam devagar.",
        choices: [
          { text: 'Chercher une place près des chars.', translation: 'Procurar um lugar perto dos carros.', next: 'place' },
          { text: "Aller d'abord manger une socca dans le vieux Nice.", translation: 'Ir primeiro comer uma socca na parte antiga de Nice.', next: 'socca' },
        ],
      },
      socca: {
        emoji: '🫓',
        text: "Dans le vieux Nice, Linu a goûté la socca, chaude et poivrée. Elle était si bonne qu'il en a commandé une deuxième, puis une troisième. Quand il est revenu, la bataille était finie !",
        translation: 'Na parte antiga de Nice, o Linu provou a socca, quentinha e apimentada. Estava tão boa que ele pediu uma segunda, depois uma terceira. Quando voltou, a batalha tinha acabado!',
        ending: { tone: 'neutro', title: 'Socca demais', message: 'O Linu comeu muito bem, mas perdeu a batalha de flores. Tente de novo!' },
      },
      place: {
        emoji: '🎭',
        text: "Son ami Nicolas l'attendait au premier rang. “ Regarde ! Sur les chars, les gens lancent des fleurs au public. Attrape-les ! ”",
        translation: 'O amigo dele, o Nicolas, o esperava na primeira fila. “Olha! Nos carros, as pessoas jogam flores para o público. Pega!”',
        choices: [{ text: 'Lever les ailes pour attraper les fleurs.', translation: 'Levantar as asas para pegar as flores.', next: 'fleurs' }],
      },
      fleurs: {
        emoji: '🌼',
        text: "Une femme déguisée en papillon a lancé un bouquet de mimosa. Linu l'a attrapé ! Ensuite, il a attrapé deux œillets rouges, et Nicolas les a trouvés magnifiques.",
        translation: 'Uma mulher fantasiada de borboleta jogou um buquê de mimosa. O Linu o pegou! Depois, pegou dois cravos vermelhos, e o Nicolas os achou magníficos.',
        choices: [{ text: "“ Regarde, Nicolas : j'en ai trois ! ”", translation: '“Olha, Nicolas: peguei três!”', next: 'fille' }],
      },
      fille: {
        emoji: '👧',
        text: "À côté d'eux, une petite fille pleurait : elle n'avait pas de fleurs. Nicolas a dit à Linu : “ Donne-lui ton mimosa ! Tu en as trois, et elle n'en a pas. ”",
        translation: 'Ao lado deles, uma menininha chorava: ela não tinha flores. O Nicolas disse ao Linu: “Dá a sua mimosa para ela! Você tem três, e ela não tem nenhuma.”',
        choices: [
          { text: 'Donner le mimosa à la petite fille.', translation: 'Dar a mimosa à menininha.', next: 'donne' },
          {
            text: 'Donner le mimosa à Nicolas.',
            translation: 'Dar a mimosa ao Nicolas.',
            wrong: "Em “Donne-lui ton mimosa”, o “lui” é a menininha que chorava porque não tinha flores (“elle n'en a pas”). O Nicolas pediu para dar a ELA.",
          },
        ],
      },
      donne: {
        emoji: '😊',
        text: "La petite fille a arrêté de pleurer et elle a dit merci. Sa mère a remercié Linu et elle leur a offert deux parts de socca. Ils les ont mangées en regardant les chars.",
        translation: 'A menininha parou de chorar e agradeceu. A mãe dela agradeceu ao Linu e ofereceu a eles dois pedaços de socca. Eles os comeram olhando os carros.',
        choices: [{ text: '“ Et ce soir, on fait quoi ? ”', translation: '“E hoje à noite, o que a gente faz?”', next: 'soir' }],
      },
      soir: {
        emoji: '🌃',
        text: "Nicolas a répondu : “ Ce soir, il y a le défilé de nuit. Il commence à neuf heures, place Masséna. Retrouve-moi devant la fontaine, et n'y va pas sans moi : il y a toujours trop de monde ! ”",
        translation: 'O Nicolas respondeu: “Hoje à noite tem o desfile noturno. Começa às nove, na place Masséna. Me encontra na frente da fonte, e não vá lá sem mim: sempre tem gente demais!”',
        choices: [
          { text: "“ D'accord ! Je t'attends devant la fontaine à neuf heures. ”", translation: '“Combinado! Espero você na frente da fonte às nove.”', next: 'final_bom' },
          { text: "“ Merci, mais je suis fatigué. Je rentre à l'hôtel. ”", translation: '“Obrigado, mas estou cansado. Vou voltar para o hotel.”', next: 'final_hotel' },
          {
            text: "“ D'accord, j'y vais tout seul à huit heures ! ”",
            translation: '“Combinado, vou lá sozinho às oito!”',
            wrong: "O Nicolas disse “n'y va pas sans moi” (não vá lá sem mim) e que o desfile começa às nove (“à neuf heures”), na frente da fonte.",
          },
        ],
      },
      final_hotel: {
        emoji: '🛏️',
        text: "Linu est rentré à l'hôtel. Depuis sa fenêtre, il voyait les lumières du défilé au loin. Il s'est endormi avec ses deux œillets sur la table.",
        translation: 'O Linu voltou para o hotel. Da janela, ele via as luzes do desfile ao longe. Adormeceu com os dois cravos em cima da mesa.',
        ending: { tone: 'neutro', title: 'Carnaval pela janela', message: 'Um dia bonito, mas o Linu perdeu o desfile noturno. Tente de novo!' },
      },
      final_bom: {
        emoji: '🎉',
        text: "À neuf heures, Linu et Nicolas y étaient. Les chars brillaient de mille lumières et la musique jouait fort. Linu a gardé ses deux œillets : il les a mis dans un livre, en souvenir de Nice.",
        translation: 'Às nove, o Linu e o Nicolas estavam lá. Os carros brilhavam com mil luzes e a música tocava alto. O Linu guardou os dois cravos: colocou-os num livro, de lembrança de Nice.',
        ending: { tone: 'bom', title: 'Flores de carnaval', message: 'O Linu pegou flores, deu a mimosa à menininha e curtiu o desfile noturno com o Nicolas.' },
      },
    },
  },
  // ───────────────────────── fr-h16 · B1.2 · Quebec ─────────────────────────
  {
    id: 'fr-h16',
    level: 'B1.2',
    cefr: 'B1',
    title: "Le temps des sucres",
    emoji: '🍁',
    summary: "Numa cabana de açúcar no interior do Quebec, o Linu ajuda a fazer xarope de bordo e prova a “tire” na neve.",
    cultural_context:
      "Na primavera, quando as noites ainda gelam e os dias já esquentam, a seiva sobe nos bordos: é o “temps des sucres”. O Quebec produz a maior parte do xarope de bordo do mundo, e as famílias vão às “cabanes à sucre” comer e provar a “tire”, xarope quente que endurece sobre a neve.",
    start: 'start',
    glossary: [
      ["la cabane à sucre", "a cabana de açúcar (onde se faz o xarope de bordo)"],
      ["l'érable", "o bordo (a árvore da folha da bandeira do Canadá)"],
      ["la sève", "a seiva"],
      ["la tire d'érable", "xarope de bordo engrossado, que se enrola na neve"],
      ["le seau", "o balde"],
      ["le plus vieux de…", "o mais velho de…"],
      ["dont", "de que, do qual, de quem"],
      ["il fera plus chaud", "vai fazer mais calor (futuro de “faire”)"],
    ],
    nodes: {
      start: {
        emoji: '🌲',
        text: "C'est le printemps au Québec, mais il y a encore de la neige partout. Linu arrive à une cabane à sucre où l'attend Mathieu, un ami qui y travaille chaque année. “ Cette nuit, il a gelé, et aujourd'hui il fera plus chaud qu'hier : la sève coulera bien ! Tu m'aideras à ramasser les seaux ? ”",
        translation: "É primavera no Quebec, mas ainda há neve por toda parte. O Linu chega a uma cabana de açúcar onde o espera o Mathieu, um amigo que trabalha lá todo ano. “Esta noite gelou, e hoje vai fazer mais calor que ontem: a seiva vai escorrer bem! Você me ajuda a recolher os baldes?”",
        choices: [
          { text: "“ Bien sûr ! Je porterai les seaux les plus lourds. ”", translation: "“Claro! Eu levo os baldes mais pesados.”", next: 'erables' },
          { text: "“ D'accord, mais je visiterai d'abord la cabane. ”", translation: "“Tá bom, mas primeiro vou conhecer a cabana.”", next: 'cabane' },
          {
            text: "“ Il fera froid aujourd'hui, alors on restera à l'intérieur ? ”",
            translation: "“Vai fazer frio hoje, então vamos ficar lá dentro?”",
            wrong: "O Mathieu disse “il fera plus chaud qu'hier”: hoje vai fazer MAIS calor que ontem. É justamente o frio da noite seguido do calor do dia que faz a seiva escorrer.",
          },
        ],
      },
      cabane: {
        emoji: '🏠',
        text: "Dans la cabane, il y a de vieilles photos où on voit la famille de Mathieu devant les érables. La tante de Mathieu prépare des fèves au lard sur une grande table. “ Ce midi, tu mangeras le repas le plus copieux de ta vie ! Mais d'abord, va aider Mathieu. ”",
        translation: "Na cabana há fotos antigas em que se vê a família do Mathieu diante dos bordos. A tia do Mathieu prepara feijão com toucinho numa mesa grande. “No almoço, você vai comer a refeição mais farta da sua vida! Mas antes vá ajudar o Mathieu.”",
        choices: [{ text: "“ J'y vais tout de suite ! ”", translation: "“Vou agora mesmo!”", next: 'erables' }],
      },
      erables: {
        emoji: '🪣',
        text: "Dans l'érablière, chaque arbre a un petit seau accroché au tronc. Mathieu montre un vieil érable : “ Voilà l'arbre dont mon grand-père était le plus fier. C'est le plus vieux de la forêt, et il donne encore plus de sève que les jeunes. ” Les seaux sont pleins d'un liquide clair qui ressemble à de l'eau.",
        translation: "No bosque de bordos, cada árvore tem um baldinho pendurado no tronco. O Mathieu mostra um bordo velho: “Esta é a árvore de que o meu avô mais se orgulhava. É a mais velha da floresta, e ainda dá mais seiva que as jovens.” Os baldes estão cheios de um líquido claro que parece água.",
        choices: [
          { text: "“ C'est de l'eau ? Mais où est le sirop ? ”", translation: "“Isso é água? Mas cadê o xarope?”", next: 'bouillir' },
          { text: "“ Je peux goûter la sève qui coule ? ”", translation: "“Posso provar a seiva que está escorrendo?”", next: 'gouter' },
        ],
      },
      gouter: {
        emoji: '💧',
        text: "Linu goûte la sève : elle est à peine sucrée ! Mathieu rit : “ Il faut environ quarante litres de sève pour faire un seul litre de sirop. Ce soir, on fera bouillir tout ça, et demain tu goûteras le meilleur sirop du Québec. ”",
        translation: "O Linu prova a seiva: ela mal é doce! O Mathieu ri: “São precisos uns quarenta litros de seiva para fazer um único litro de xarope. Hoje à noite vamos ferver tudo isso, e amanhã você vai provar o melhor xarope do Quebec.”",
        choices: [
          { text: "“ Quarante litres ! Alors je ramasserai encore plus de seaux. ”", translation: "“Quarenta litros! Então vou recolher ainda mais baldes.”", next: 'bouillir' },
          {
            text: "“ Donc un litre de sève suffit pour faire quarante litres de sirop ? ”",
            translation: "“Então um litro de seiva basta para fazer quarenta litros de xarope?”",
            wrong: "É o contrário: são precisos uns QUARENTA litros de seiva para fazer UM litro de xarope. A seiva é quase só água, e a fervura tira essa água.",
          },
        ],
      },
      bouillir: {
        emoji: '🔥',
        text: "Dans la cabane, un grand évaporateur chauffe au bois. La vapeur monte jusqu'au toit, et ça sent le caramel. Mathieu surveille la couleur du sirop : “ Quand il sera doré, il sera prêt. Mais attention : s'il chauffe trop, il brûlera ! ” Au même moment, on entend des voix dehors : les voisins arrivent pour le repas.",
        translation: "Na cabana, um grande evaporador esquenta a lenha. O vapor sobe até o teto, e sente-se cheiro de caramelo. O Mathieu vigia a cor do xarope: “Quando ficar dourado, vai estar pronto. Mas atenção: se esquentar demais, vai queimar!” No mesmo instante ouvem-se vozes lá fora: os vizinhos estão chegando para a refeição.",
        choices: [
          { text: "“ Je resterai ici avec toi pour surveiller le sirop. ”", translation: "“Vou ficar aqui com você para vigiar o xarope.”", next: 'sirop' },
          { text: "“ Je vais accueillir les voisins ! ”", translation: "“Vou receber os vizinhos!”", next: 'voisins' },
        ],
      },
      sirop: {
        emoji: '🍯',
        text: "Linu et Mathieu surveillent l'évaporateur ensemble. Enfin, le sirop devient doré, plus épais que le miel. Mathieu en verse un peu dans une casserole : “ Celui-là, on le fera épaissir encore un peu. Tu verras, c'est la partie que les enfants préfèrent. ”",
        translation: "O Linu e o Mathieu vigiam o evaporador juntos. Enfim, o xarope fica dourado, mais grosso que o mel. O Mathieu despeja um pouco numa panela: “Este aqui a gente vai engrossar mais um pouco. Você vai ver, é a parte que as crianças preferem.”",
        choices: [{ text: "“ Je te suis ! ”", translation: "“Vou atrás de você!”", next: 'tire' }],
      },
      tire: {
        emoji: '❄️',
        text: "Dehors, Mathieu remplit un long bac de neige propre. Il y verse le sirop chaud en longues lignes, et le sirop durcit tout de suite. “ Prends un bâton et roule-le : voilà la tire d'érable, la friandise dont tous les Québécois se souviennent depuis leur enfance ! ”",
        translation: "Lá fora, o Mathieu enche uma bandeja comprida com neve limpa. Ele despeja ali o xarope quente em longas linhas, e o xarope endurece na hora. “Pegue um palito e enrole: esta é a tire de bordo, a guloseima de que todos os quebequenses se lembram desde a infância!”",
        choices: [
          { text: "Linu roule la tire sur un bâton et la goûte.", translation: "O Linu enrola a tire num palito e prova.", next: 'final_bom' },
          {
            text: "“ Alors je la mettrai au four pour la faire durcir ? ”",
            translation: "“Então vou pôr no forno para endurecer?”",
            wrong: "O Mathieu explicou que o xarope quente endurece na hora (“durcit tout de suite”) em contato com a neve. Não precisa de forno: é só enrolar num palito e comer.",
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: "Linu n'a jamais rien mangé d'aussi bon. “ L'année prochaine, je reviendrai pour tout le temps des sucres ! ” dit-il. Mathieu lui offre une bouteille de sirop : “ Comme ça, tu penseras à nous chaque matin. ”",
        translation: "O Linu nunca comeu nada tão gostoso. “Ano que vem vou voltar para a temporada inteira do açúcar!”, diz ele. O Mathieu lhe dá uma garrafa de xarope: “Assim você vai pensar na gente toda manhã.”",
        ending: { tone: 'bom', title: 'Doce primavera', message: "O Linu ajudou a fazer xarope de bordo e provou a tire na neve, como manda a tradição do Quebec." },
      },
      voisins: {
        emoji: '🎻',
        text: "Dehors, les voisins sont arrivés avec un violon. Linu danse avec eux dans la neige, et il oublie complètement le sirop. Quand il revient, une odeur de brûlé remplit la cabane. Mathieu soupire : “ Ce n'est pas grave, on en refera demain. ”",
        translation: "Lá fora, os vizinhos chegaram com um violino. O Linu dança com eles na neve e esquece completamente o xarope. Quando ele volta, um cheiro de queimado enche a cabana. O Mathieu suspira: “Não tem problema, amanhã a gente faz de novo.”",
        choices: [{ text: "“ Pardon, Mathieu ! Demain, je ne quitterai pas l'évaporateur. ”", translation: "“Desculpe, Mathieu! Amanhã não saio de perto do evaporador.”", next: 'final_brule' }],
      },
      final_brule: {
        emoji: '😅',
        text: "Ce soir-là, il n'y aura pas de tire d'érable pour Linu. Mais le violon joue encore, les voisins chantent, et Mathieu promet : “ Demain, c'est toi qui feras le sirop ! ”",
        translation: "Naquela noite não vai ter tire de bordo para o Linu. Mas o violino continua tocando, os vizinhos cantam, e o Mathieu promete: “Amanhã é você quem vai fazer o xarope!”",
        ending: { tone: 'neutro', title: 'Xarope queimado', message: "A festa foi ótima, mas o xarope queimou. Amanhã tem outra chance!" },
      },
    },
  },

  // ───────────────────────── fr-h17 · B1.2 · Genebra ─────────────────────────
  {
    id: 'fr-h17',
    level: 'B1.2',
    cefr: 'B1',
    title: "La marmite de l'Escalade",
    emoji: '🍫',
    summary: "Em Genebra, em dezembro, o Linu participa da festa da Escalade e da tradição de quebrar a marmita de chocolate.",
    cultural_context:
      "Todo mês de dezembro, Genebra comemora a Escalade: na noite de 11 para 12 de dezembro de 1602, a cidade repeliu um ataque noturno das tropas do duque de Saboia. Segundo a tradição, a Mère Royaume jogou uma panela de sopa quente num soldado; por isso hoje se quebra uma marmita de chocolate, e quem a quebra são o mais novo e o mais velho da mesa.",
    start: 'start',
    glossary: [
      ["la marmite", "o caldeirão, a panela grande"],
      ["l'Escalade", "a Escalada (festa de Genebra)"],
      ["le cortège", "o cortejo, o desfile"],
      ["la vieille ville", "a cidade velha, o centro histórico"],
      ["le plus jeune / le plus âgé", "o mais novo / o mais velho"],
      ["septante", "setenta (na Suíça e na Bélgica)"],
      ["dont", "de que, de quem, cujo"],
      ["Ainsi périrent les ennemis de la République !", "Assim pereceram os inimigos da República! (frase da tradição)"],
    ],
    nodes: {
      start: {
        emoji: '🌃',
        text: "Genève, un soir de décembre. Il fait froid au bord du lac, et la bise souffle fort. Linu retrouve Chloé, une étudiante qui habite dans la vieille ville. “ Ce soir, tu verras la fête la plus importante de Genève : l'Escalade ! Il y aura un cortège, de la soupe et une marmite en chocolat. ”",
        translation: "Genebra, uma noite de dezembro. Faz frio à beira do lago, e o vento norte sopra forte. O Linu encontra a Chloé, uma estudante que mora na cidade velha. “Hoje à noite você vai ver a festa mais importante de Genebra: a Escalade! Vai ter cortejo, sopa e uma marmita de chocolate.”",
        choices: [
          { text: "“ Une marmite en chocolat ? Je te suivrai partout ! ”", translation: "“Uma marmita de chocolate? Vou te seguir para todo lado!”", next: 'cortege' },
          { text: "“ On mangera d'abord la soupe ? J'ai froid ! ”", translation: "“A gente come a sopa primeiro? Estou com frio!”", next: 'soupe' },
        ],
      },
      soupe: {
        emoji: '🍲',
        text: "Sur une place, des bénévoles servent de la soupe aux légumes. “ C'est la soupe la plus célèbre de l'année ”, dit Chloé en riant. Un vieux monsieur leur propose aussi du vin chaud. Pendant ce temps, on entend les tambours du cortège qui s'éloigne.",
        translation: "Numa praça, voluntários servem sopa de legumes. “É a sopa mais famosa do ano”, diz a Chloé, rindo. Um senhor idoso também lhes oferece vinho quente. Enquanto isso, ouvem-se os tambores do cortejo, que vai se afastando.",
        choices: [
          { text: "“ Vite, on rattrapera le cortège ! ”", translation: "“Rápido, vamos alcançar o cortejo!”", next: 'cortege' },
          { text: "“ Je prendrai encore un bol, il fait trop froid ! ”", translation: "“Vou tomar mais uma tigela, está frio demais!”", next: 'final_soupe' },
        ],
      },
      final_soupe: {
        emoji: '🥣',
        text: "Linu boit un deuxième bol, puis un troisième. Quand il lève enfin les yeux, les rues sont vides : le cortège est déjà passé. “ Tant pis, dit Chloé, l'année prochaine, on arrivera plus tôt ! ”",
        translation: "O Linu toma uma segunda tigela, depois uma terceira. Quando finalmente levanta os olhos, as ruas estão vazias: o cortejo já passou. “Paciência”, diz a Chloé, “ano que vem a gente chega mais cedo!”",
        ending: { tone: 'neutro', title: 'Sopa demais, cortejo de menos', message: "O Linu se esquentou com a sopa, mas perdeu o cortejo da Escalade." },
      },
      cortege: {
        emoji: '🔥',
        text: "Dans les rues étroites de la vieille ville, des centaines de personnes marchent avec des torches, en costumes du XVIIe siècle. Chloé explique : “ Ils jouent les Genevois de 1602. La femme dont tout le monde parle, c'est la Mère Royaume. Cette nuit-là, elle a jeté sa marmite de soupe bouillante sur un soldat ennemi ! ”",
        translation: "Nas ruas estreitas da cidade velha, centenas de pessoas marcham com tochas, com trajes do século XVII. A Chloé explica: “Eles representam os genebrinos de 1602. A mulher de quem todo mundo fala é a Mère Royaume. Naquela noite, ela jogou a sua panela de sopa fervendo num soldado inimigo!”",
        choices: [
          { text: "“ Alors c'est pour ça que la marmite est en chocolat ! ”", translation: "“Então é por isso que a marmita é de chocolate!”", next: 'maison' },
          {
            text: "“ La Mère Royaume, c'était donc un soldat ennemi ? ”",
            translation: "“Então a Mère Royaume era um soldado inimigo?”",
            wrong: "Não: a Mère Royaume era uma genebrina que JOGOU a panela de sopa num soldado inimigo. “La femme dont tout le monde parle” é “a mulher de quem todo mundo fala”.",
          },
        ],
      },
      maison: {
        emoji: '🏠',
        text: "Après le cortège, Chloé emmène Linu chez ses grands-parents. Sur la table, il y a une marmite en chocolat remplie de petits légumes en pâte d'amande. Le grand-père explique la règle : “ Ce sont le plus jeune et le plus âgé qui cassent la marmite ensemble. Le plus âgé, c'est moi. Et le plus jeune, ce soir, c'est toi, Linu ! ”",
        translation: "Depois do cortejo, a Chloé leva o Linu à casa dos avós. Na mesa há uma marmita de chocolate cheia de legumezinhos de marzipã. O avô explica a regra: “Quem quebra a marmita juntos são o mais novo e o mais velho. O mais velho sou eu. E o mais novo, hoje, é você, Linu!”",
        choices: [
          { text: "“ Moi ? D'accord, je la casserai avec vous ! ”", translation: "“Eu? Tá bom, vou quebrá-la com o senhor!”", next: 'casser' },
          {
            text: "“ Alors c'est Chloé qui la cassera toute seule ? ”",
            translation: "“Então é a Chloé que vai quebrá-la sozinha?”",
            wrong: "O avô explicou que quem quebra a marmita são o MAIS NOVO e o MAIS VELHO, juntos. O mais velho é o avô, e hoje o mais novo é o próprio Linu!",
          },
        ],
      },
      casser: {
        emoji: '🔨',
        text: "Le grand-père, qui a septante-neuf ans, pose sa main sur la patte de Linu. Ensemble, ils frappent la marmite et disent la phrase traditionnelle : “ Ainsi périrent les ennemis de la République ! ” Le chocolat se casse en mille morceaux, et toute la famille applaudit.",
        translation: "O avô, que tem setenta e nove anos, põe a mão sobre a nadadeira do Linu. Juntos, eles batem na marmita e dizem a frase tradicional: “Assim pereceram os inimigos da República!” O chocolate se quebra em mil pedaços, e a família toda aplaude.",
        choices: [
          { text: "“ Qui veut le plus gros morceau ? ”", translation: "“Quem quer o pedaço maior?”", next: 'final_bom' },
          { text: "Linu mange tous les légumes en pâte d'amande tout seul.", translation: "O Linu come sozinho todos os legumezinhos de marzipã.", next: 'final_gourmand' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: "Tout le monde partage le chocolat, et le grand-père raconte l'histoire de 1602, que Linu n'oubliera jamais. “ Tu reviendras l'année prochaine ? ” demande Chloé. “ Bien sûr ! Et la prochaine fois, je participerai aussi à la course de l'Escalade ! ”",
        translation: "Todos dividem o chocolate, e o avô conta a história de 1602, que o Linu nunca vai esquecer. “Você volta ano que vem?”, pergunta a Chloé. “Claro! E da próxima vez vou participar também da corrida da Escalade!”",
        ending: { tone: 'bom', title: 'Chocolate da vitória', message: "O Linu quebrou a marmita com o avô da Chloé e aprendeu a história da Escalade de 1602." },
      },
      final_gourmand: {
        emoji: '🤢',
        text: "Linu mange un légume en pâte d'amande, puis deux, puis dix. À minuit, il a mal au ventre et ne peut plus bouger. “ C'était le dessert le plus sucré de ma vie ”, gémit-il sur le canapé.",
        translation: "O Linu come um legumezinho de marzipã, depois dois, depois dez. À meia-noite, ele está com dor de barriga e não consegue mais se mexer. “Foi a sobremesa mais doce da minha vida”, geme ele no sofá.",
        ending: { tone: 'neutro', title: 'Pinguim empanturrado', message: "A marmita foi quebrada, mas o Linu exagerou nos docinhos de marzipã. Da próxima vez, divida!" },
      },
    },
  },

  // ───────────────────────── fr-h18 · B1.2 · Dacar ─────────────────────────
  {
    id: 'fr-h18',
    level: 'B1.2',
    cefr: 'B1',
    title: "Le lac Rose",
    emoji: '🧂',
    summary: "Perto de Dacar, o Linu visita o Lago Rosa, onde o sal é colhido à mão, e descobre a “teranga” senegalesa.",
    cultural_context:
      "O Lago Retba, conhecido como Lago Rosa, fica a cerca de 30 km de Dacar, no Senegal. Sua cor vem de uma microalga que vive na água muito salgada; os coletores de sal passam manteiga de karité na pele para se protegerem do sal. “Teranga”, palavra wolof, é a famosa hospitalidade senegalesa.",
    start: 'start',
    glossary: [
      ["le sel", "o sal"],
      ["salé / salée", "salgado / salgada"],
      ["le récolteur de sel", "o coletor de sal"],
      ["le beurre de karité", "a manteiga de karité"],
      ["la pirogue", "a piroga, a canoa"],
      ["la teranga", "a hospitalidade senegalesa (palavra wolof)"],
      ["plus… que / moins… que", "mais… que / menos… que"],
      ["dont les bras…", "cujos braços…"],
    ],
    nodes: {
      start: {
        emoji: '🚐',
        text: "Ce matin, Linu quitte Dakar avec Awa, une guide qui connaît bien la région. “ Aujourd'hui, je te montrerai un lac qui est rose comme une fleur ! Il est plus salé que la mer : on y flotte sans nager. ” Le minibus roule vers le nord, entre les dunes et les baobabs.",
        translation: "Hoje de manhã, o Linu sai de Dacar com a Awa, uma guia que conhece bem a região. “Hoje vou te mostrar um lago que é cor-de-rosa como uma flor! Ele é mais salgado que o mar: a gente boia nele sem nadar.” O micro-ônibus segue para o norte, entre as dunas e os baobás.",
        choices: [
          { text: "“ J'ai hâte de le voir ! ”", translation: "“Estou ansioso para ver!”", next: 'lac' },
          {
            text: "“ Un lac d'eau douce ? Alors je pourrai en boire ! ”",
            translation: "“Um lago de água doce? Então vou poder beber a água!”",
            wrong: "A Awa disse que o lago é “plus salé que la mer”: MAIS salgado que o mar. Não dá para beber essa água!",
          },
        ],
      },
      lac: {
        emoji: '🌸',
        text: "Au bord du lac, l'eau est d'un rose pâle. “ Il sera plus rose à midi, quand le soleil sera plus fort ”, explique Awa. Des hommes et des femmes travaillent dans l'eau jusqu'à la poitrine. Ils remplissent des pirogues de sel qu'ils ramènent ensuite sur la rive.",
        translation: "À beira do lago, a água é de um rosa-claro. “Ao meio-dia vai estar mais rosa, quando o sol estiver mais forte”, explica a Awa. Homens e mulheres trabalham dentro da água até o peito. Eles enchem pirogas de sal que depois levam de volta para a margem.",
        choices: [
          { text: "“ On ira parler aux récolteurs de sel ? ”", translation: "“Vamos conversar com os coletores de sal?”", next: 'recolteurs' },
          { text: "“ Moi, je veux flotter dans ce lac ! ”", translation: "“Eu quero boiar nesse lago!”", next: 'baignade' },
        ],
      },
      baignade: {
        emoji: '🏊',
        text: "Linu entre dans l'eau et… il flotte comme un bouchon ! Il essaie de plonger, mais c'est impossible. Soudain, il a les yeux qui piquent très fort. Awa lui crie : “ Ne mets pas la tête sous l'eau ! Cette eau est dix fois plus salée que la mer ! ”",
        translation: "O Linu entra na água e… boia como uma rolha! Ele tenta mergulhar, mas é impossível. De repente, os olhos começam a arder muito. A Awa grita: “Não ponha a cabeça debaixo d'água! Essa água é dez vezes mais salgada que o mar!”",
        choices: [
          { text: "Linu sort de l'eau et va se rincer les yeux.", translation: "O Linu sai da água e vai lavar os olhos.", next: 'final_yeux' },
          { text: "Linu sort de l'eau et rejoint Awa près des récolteurs.", translation: "O Linu sai da água e vai encontrar a Awa perto dos coletores.", next: 'recolteurs' },
        ],
      },
      final_yeux: {
        emoji: '😣',
        text: "Linu passe le reste de l'après-midi à l'ombre d'un baobab, les yeux rouges. Il a vu le lac Rose, mais la prochaine fois, il gardera la tête hors de l'eau !",
        translation: "O Linu passa o resto da tarde à sombra de um baobá, com os olhos vermelhos. Ele viu o Lago Rosa, mas da próxima vez vai manter a cabeça fora d'água!",
        ending: { tone: 'neutro', title: 'Olhos ardendo', message: "O Linu boiou no Lago Rosa, mas o sal nos olhos estragou a tarde." },
      },
      recolteurs: {
        emoji: '🧂',
        text: "Awa présente Linu à Moussa, un récolteur de sel dont les bras sont couverts d'une crème blanche. “ C'est du beurre de karité, dit Moussa. Le sel brûle la peau, et le karité la protège. ” Il montre les montagnes de sel sur la rive : “ Ce sel-là, qui a séché au soleil, partira demain au marché. ”",
        translation: "A Awa apresenta o Linu ao Moussa, um coletor de sal cujos braços estão cobertos de um creme branco. “É manteiga de karité”, diz o Moussa. “O sal queima a pele, e o karité a protege.” Ele mostra os montes de sal na margem: “Esse sal aí, que secou ao sol, vai amanhã para o mercado.”",
        choices: [
          { text: "“ Je pourrai vous aider à remplir la pirogue ? ”", translation: "“Posso ajudar a encher a piroga?”", next: 'pirogue' },
          {
            text: "“ Donc cette crème blanche, c'est du sel ? ”",
            translation: "“Então esse creme branco é sal?”",
            wrong: "Não: o Moussa explicou que o creme branco nos braços é manteiga de karité, que PROTEGE a pele do sal. “Dont les bras sont couverts” = “cujos braços estão cobertos”.",
          },
        ],
      },
      pirogue: {
        emoji: '🛶',
        text: "Moussa sourit et donne une petite pelle à Linu. Le travail est bien plus dur que prévu, mais après une heure, la pirogue est pleine. “ Tu es le récolteur le plus rapide du lac ! ” rit Moussa. “ Ce soir, tu mangeras chez nous : c'est ça, la teranga. ”",
        translation: "O Moussa sorri e dá uma pazinha para o Linu. O trabalho é bem mais pesado do que ele imaginava, mas depois de uma hora a piroga está cheia. “Você é o coletor mais rápido do lago!”, ri o Moussa. “Hoje à noite você vai jantar na nossa casa: isso é a teranga.”",
        choices: [
          { text: "“ Avec plaisir, merci beaucoup ! ”", translation: "“Com prazer, muito obrigado!”", next: 'final_bom' },
          { text: "“ Merci, mais je suis trop fatigué : je rentrerai à Dakar. ”", translation: "“Obrigado, mas estou cansado demais: vou voltar para Dacar.”", next: 'final_dakar' },
        ],
      },
      final_bom: {
        emoji: '🍛',
        text: "Le soir, chez Moussa, toute la famille mange le thiéboudienne autour d'un grand plat. Linu goûte le poisson et le riz : “ C'est le meilleur plat du Sénégal ! ” Awa rit : “ Tu reviendras au lac Rose ? ” “ Bien sûr, et je serai encore plus rapide ! ”",
        translation: "À noite, na casa do Moussa, a família toda come o thiéboudienne em volta de uma travessa grande. O Linu prova o peixe e o arroz: “É o melhor prato do Senegal!” A Awa ri: “Você vai voltar ao Lago Rosa?” “Claro, e vou ser ainda mais rápido!”",
        ending: { tone: 'bom', title: 'Teranga no Lago Rosa', message: "O Linu trabalhou com os coletores de sal e foi recebido como da família." },
      },
      final_dakar: {
        emoji: '😴',
        text: "Dans le minibus, Linu s'endort avant la première dune. Il a travaillé comme un vrai récolteur, mais il n'a pas goûté le repas de la famille de Moussa.",
        translation: "No micro-ônibus, o Linu dorme antes da primeira duna. Ele trabalhou como um verdadeiro coletor, mas não provou a comida da família do Moussa.",
        ending: { tone: 'neutro', title: 'Cansado demais', message: "Um dia de trabalho de verdade, mas o Linu recusou o convite e perdeu a teranga." },
      },
    },
  },

  // ───────────────────────── fr-h19 · B1.3 · Martinica ─────────────────────────
  {
    id: 'fr-h19',
    level: 'B1.3',
    cefr: 'B1',
    title: "Sur les pentes de la Pelée",
    emoji: '🌋',
    summary: "Na Martinica, o Linu tenta subir a montagne Pelée antes das nuvens e depois visita as ruínas de Saint-Pierre.",
    cultural_context:
      "Em 8 de maio de 1902, a erupção da montagne Pelée destruiu a cidade de Saint-Pierre, então a mais importante da Martinica, e matou quase todos os seus habitantes, cerca de 28 mil pessoas. Hoje as ruínas podem ser visitadas, e o vulcão é vigiado dia e noite por um observatório.",
    start: 'start',
    glossary: [
      ["se lever", "levantar-se"],
      ["se dépêcher", "apressar-se"],
      ["le sentier", "a trilha"],
      ["le sommet", "o cume, o topo"],
      ["depuis trois jours", "há três dias (e continua)"],
      ["il y a une heure", "uma hora atrás"],
      ["pendant une heure", "durante uma hora"],
      ["Si j'étais toi, je…", "Se eu fosse você, eu…"],
    ],
    nodes: {
      start: {
        emoji: '🌅',
        text: "Linu est en Martinique depuis trois jours. Ce matin, il s'est levé à cinq heures pour monter sur la montagne Pelée avec Joël, un guide du Morne-Rouge. “ Si on partait maintenant, on arriverait au sommet avant les nuages, dit Joël. Mais tu devrais d'abord mettre de la crème solaire. ”",
        translation: "O Linu está na Martinica há três dias. Hoje de manhã, ele se levantou às cinco horas para subir a montagne Pelée com o Joël, um guia do Morne-Rouge. “Se saíssemos agora, chegaríamos ao topo antes das nuvens”, diz o Joël. “Mas você deveria passar protetor solar antes.”",
        choices: [
          { text: "“ Je me dépêche ! On part tout de suite. ”", translation: "“Vou me apressar! Vamos sair já.”", next: 'montee' },
          { text: "“ On pourrait d'abord visiter Saint-Pierre ? ”", translation: "“A gente podia visitar Saint-Pierre antes?”", next: 'stpierre' },
          {
            text: "“ Super, on est déjà arrivés au sommet ! ”",
            translation: "“Ótimo, já chegamos ao topo!”",
            wrong: "O Joël usou o condicional: “si on partait maintenant, on arriverait…” (se saíssemos agora, chegaríamos…). É só uma hipótese: eles ainda nem saíram!",
          },
        ],
      },
      montee: {
        emoji: '🥾',
        text: "Le sentier monte fort entre les fougères. Après une heure, Linu s'arrête pour respirer. Il y a une heure, il faisait beau ; maintenant, le brouillard cache tout. Joël regarde le ciel : “ Si j'étais toi, je ne me presserais pas. Il pourrait pleuvoir là-haut. ”",
        translation: "A trilha sobe forte entre as samambaias. Depois de uma hora, o Linu para para respirar. Uma hora atrás fazia sol; agora a neblina esconde tudo. O Joël olha o céu: “Se eu fosse você, não teria pressa. Pode chover lá em cima.”",
        choices: [
          { text: "“ On pourrait continuer doucement, en faisant attention ? ”", translation: "“A gente podia continuar devagar, tomando cuidado?”", next: 'sommet' },
          { text: "“ Tu as raison, je préférerais redescendre. ”", translation: "“Você tem razão, eu preferiria descer.”", next: 'cafe' },
        ],
      },
      sommet: {
        emoji: '☁️',
        text: "Ils marchent encore pendant une heure dans le vent. Au sommet, ils ne voient rien : tout est blanc. Puis, tout à coup, le nuage s'ouvre pendant quelques minutes. Linu voit toute l'île, la mer des deux côtés et, en bas, la ville de Saint-Pierre.",
        translation: "Eles caminham mais uma hora no vento. No topo, não veem nada: está tudo branco. Então, de repente, a nuvem se abre por alguns minutos. O Linu vê a ilha inteira, o mar dos dois lados e, lá embaixo, a cidade de Saint-Pierre.",
        choices: [
          { text: "“ Merci, Joël ! Maintenant, on devrait redescendre avant la pluie. ”", translation: "“Obrigado, Joël! Agora a gente deveria descer antes da chuva.”", next: 'stpierre' },
          { text: "“ C'est magnifique ! Je voudrais rester ici encore une heure ! ”", translation: "“Que lindo! Eu queria ficar aqui mais uma hora!”", next: 'final_pluie' },
        ],
      },
      final_pluie: {
        emoji: '🌧️',
        text: "Linu reste au sommet pour prendre des photos. Mais le nuage se referme, et une pluie froide se met à tomber. Ils redescendent pendant trois heures dans la boue. “ La prochaine fois, je t'écouterai ”, promet Linu, trempé jusqu'aux plumes.",
        translation: "O Linu fica no topo para tirar fotos. Mas a nuvem se fecha de novo, e uma chuva fria começa a cair. Eles descem durante três horas na lama. “Da próxima vez, vou te ouvir”, promete o Linu, encharcado até as penas.",
        ending: { tone: 'neutro', title: 'Encharcado no vulcão', message: "O Linu viu a ilha inteira do topo, mas ficou tempo demais e desceu debaixo de chuva." },
      },
      cafe: {
        emoji: '🥤',
        text: "Au Morne-Rouge, ils s'installent dans un petit café. Pendant qu'ils boivent un jus de goyave, la patronne leur raconte qu'elle habite au pied du volcan depuis soixante ans. “ Si vous alliez à Saint-Pierre cet après-midi, vous comprendriez mieux notre montagne. ”",
        translation: "No Morne-Rouge, eles se sentam num pequeno café. Enquanto tomam um suco de goiaba, a dona do café lhes conta que mora ao pé do vulcão há sessenta anos. “Se vocês fossem a Saint-Pierre hoje à tarde, entenderiam melhor a nossa montanha.”",
        choices: [{ text: "“ Bonne idée ! On y va, Joël ? ”", translation: "“Boa ideia! Vamos lá, Joël?”", next: 'stpierre' }],
      },
      stpierre: {
        emoji: '🏚️',
        text: "Linu et Joël se promènent dans les ruines de Saint-Pierre. Joël montre un vieux mur noirci : “ Il y a plus de cent ans, cette ville était la plus riche de l'île. On l'appelait le petit Paris des Antilles. Le 8 mai 1902, le volcan l'a détruite en quelques minutes. ”",
        translation: "O Linu e o Joël passeiam pelas ruínas de Saint-Pierre. O Joël mostra um muro velho, enegrecido: “Há mais de cem anos, esta cidade era a mais rica da ilha. Era chamada de pequena Paris das Antilhas. Em 8 de maio de 1902, o vulcão a destruiu em poucos minutos.”",
        choices: [
          { text: "“ Et depuis, la ville ne s'est jamais reconstruite ? ”", translation: "“E desde então a cidade nunca foi reconstruída?”", next: 'cachot' },
          {
            text: "“ Donc le volcan a détruit la ville il y a trois ans ? ”",
            translation: "“Então o vulcão destruiu a cidade três anos atrás?”",
            wrong: "“Il y a plus de cent ans” = há mais de cem anos. A erupção foi em 1902. “Il y a” + tempo é o nosso “há… atrás”.",
          },
        ],
      },
      cachot: {
        emoji: '🔒',
        text: "“ Si, elle s'est reconstruite, mais elle est beaucoup plus petite aujourd'hui ”, répond Joël. Il s'arrête devant une petite cellule de pierre : “ Ici, un prisonnier a survécu à l'éruption, protégé par ces murs épais. ” Puis il ajoute : “ Tu voudrais voir le musée ? On y explique comment on surveille le volcan aujourd'hui. ”",
        translation: "“Foi, sim, ela se reconstruiu, mas hoje é bem menor”, responde o Joël. Ele para diante de uma pequena cela de pedra: “Aqui, um prisioneiro sobreviveu à erupção, protegido por estas paredes grossas.” Depois acrescenta: “Você gostaria de ver o museu? Lá se explica como o vulcão é vigiado hoje.”",
        choices: [{ text: "“ Oui, j'aimerais bien comprendre comment on le surveille. ”", translation: "“Sim, eu gostaria muito de entender como ele é vigiado.”", next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: "Au musée, Linu apprend que des scientifiques surveillent la montagne Pelée jour et nuit. Le soir, il écrit dans son carnet : “ Aujourd'hui, je me suis levé avec le soleil, j'ai marché sur un volcan et j'ai compris son histoire. Si je pouvais, je resterais ici tout l'hiver. ”",
        translation: "No museu, o Linu aprende que cientistas vigiam a montagne Pelée dia e noite. À noite, ele escreve no caderno: “Hoje me levantei com o sol, caminhei sobre um vulcão e entendi a sua história. Se eu pudesse, ficaria aqui o inverno inteiro.”",
        ending: { tone: 'bom', title: 'Entre o vulcão e a memória', message: "O Linu conheceu a montagne Pelée e a história de Saint-Pierre, com respeito e curiosidade." },
      },
    },
  },

  // ───────────────────────── fr-h20 · B1.3 · Bruxelas ─────────────────────────
  {
    id: 'fr-h20',
    level: 'B1.3',
    cefr: 'B1',
    title: "Un costume pour le Manneken-Pis",
    emoji: '🧵',
    summary: "Numa manhã de chuva em Bruxelas, o Linu ajuda o camareiro do Manneken-Pis e descobre palavras do francês da Bélgica.",
    cultural_context:
      "O Manneken-Pis, estatueta de bronze de um menino perto da Grand-Place de Bruxelas, tem um guarda-roupa de mais de mil trajes, doados por países, cidades e associações do mundo todo e expostos num pequeno museu. Na Bélgica, “le dîner” é o almoço, “le souper” é o jantar, e diz-se “septante” e “nonante”.",
    start: 'start',
    glossary: [
      ["la drache", "o toró, a chuva forte (belgicismo)"],
      ["l'habilleur", "o camareiro, quem veste (a estátua)"],
      ["le costume", "o traje (e também o terno)"],
      ["le dîner", "na Bélgica: o almoço (o jantar é “le souper”)"],
      ["s'abriter", "abrigar-se"],
      ["Pourriez-vous… ?", "O senhor poderia…?"],
      ["Si vous n'étiez pas là, je serais…", "Se o senhor não estivesse aqui, eu estaria…"],
    ],
    nodes: {
      start: {
        emoji: '🌧️',
        text: "Bruxelles, un samedi matin. Il tombe une drache terrible, et Linu s'abrite sous un balcon près de la Grand-Place. À côté de lui, un monsieur serre une grande boîte contre lui. “ Excusez-moi, pourriez-vous m'aider ? Je dois habiller le Manneken-Pis dans une heure, et si la boîte se mouillait, le costume serait abîmé. ”",
        translation: "Bruxelas, um sábado de manhã. Está caindo um toró terrível, e o Linu se abriga debaixo de uma sacada perto da Grand-Place. Ao lado dele, um senhor aperta uma caixa grande contra o corpo. “Com licença, o senhor poderia me ajudar? Tenho que vestir o Manneken-Pis daqui a uma hora, e se a caixa se molhasse, o traje ficaria estragado.”",
        choices: [
          { text: "“ Avec plaisir ! Je pourrais tenir le parapluie. ”", translation: "“Com prazer! Eu poderia segurar o guarda-chuva.”", next: 'rue' },
          {
            text: "“ Mais il fait beau, pourquoi vous vous inquiétez ? ”",
            translation: "“Mas está fazendo sol, por que o senhor está preocupado?”",
            wrong: "“Il tombe une drache” quer dizer que está caindo um TORÓ: “drache” é chuva forte no francês da Bélgica. Por isso o senhor tem medo de molhar a caixa.",
          },
        ],
      },
      rue: {
        emoji: '☂️',
        text: "Le monsieur s'appelle Marc ; il est habilleur de la statue depuis quinze ans. “ Je m'en occupe plusieurs fois par mois, explique-t-il. Aujourd'hui, il portera un costume de musicien. ” Ils se dépêchent dans les petites rues pavées, sous le parapluie.",
        translation: "O senhor se chama Marc; ele é camareiro da estátua há quinze anos. “Cuido dele várias vezes por mês”, explica. “Hoje ele vai usar um traje de músico.” Eles se apressam pelas ruelas de paralelepípedo, debaixo do guarda-chuva.",
        choices: [
          { text: "“ Depuis quinze ans ! Combien de costumes a-t-il ? ”", translation: "“Há quinze anos! Quantos trajes ele tem?”", next: 'musee' },
          { text: "“ Pourrais-je voir le costume avant ? ”", translation: "“Eu poderia ver o traje antes?”", next: 'boite' },
        ],
      },
      musee: {
        emoji: '👗',
        text: "“ Plus de mille ! On les garde dans un petit musée, pas loin d'ici. Si vous aviez le temps cet après-midi, je vous le ferais visiter. ” Linu imagine un pingouin en costume de musicien et se met à rire. Ils arrivent devant la statue, où une fanfare joue déjà.",
        translation: "“Mais de mil! A gente guarda todos num pequeno museu, perto daqui. Se o senhor tivesse tempo hoje à tarde, eu lhe mostraria o museu.” O Linu imagina um pinguim com traje de músico e começa a rir. Eles chegam diante da estátua, onde uma fanfarra já está tocando.",
        choices: [{ text: "“ Je viendrais volontiers ! Mais d'abord, la statue. ”", translation: "“Eu iria com prazer! Mas primeiro a estátua.”", next: 'statue' }],
      },
      boite: {
        emoji: '📦',
        text: "Marc ouvre un peu la boîte sous l'auvent d'un café. Dedans, il y a un minuscule costume rouge, un chapeau et une petite trompette. À ce moment-là, un coup de vent arrive, et le chapeau s'envole dans la rue !",
        translation: "O Marc abre um pouco a caixa debaixo do toldo de um café. Dentro há um minúsculo traje vermelho, um chapéu e um trompetezinho. Nesse momento vem uma rajada de vento, e o chapéu sai voando pela rua!",
        choices: [
          { text: "Linu court après le chapeau.", translation: "O Linu corre atrás do chapéu.", next: 'chapeau' },
          { text: "“ Tant pis, il s'habillera sans chapeau ! ”", translation: "“Paciência, ele vai se vestir sem chapéu!”", next: 'final_sans' },
        ],
      },
      final_sans: {
        emoji: '😕',
        text: "Le chapeau disparaît dans la foule. Le Manneken-Pis porte son costume sans chapeau, et Marc est un peu déçu. “ Ce n'est pas grave, dit-il poliment. Mais avec son chapeau, il serait plus élégant. ”",
        translation: "O chapéu some na multidão. O Manneken-Pis usa o traje sem chapéu, e o Marc fica um pouco decepcionado. “Não tem problema”, diz ele, educado. “Mas com o chapéu ele ficaria mais elegante.”",
        ending: { tone: 'neutro', title: 'Sem chapéu', message: "O Linu desistiu do chapéu, e o Manneken-Pis ficou com o traje incompleto." },
      },
      chapeau: {
        emoji: '🎩',
        text: "Linu glisse sur les pavés mouillés, mais il attrape le chapeau juste avant une flaque. Marc est ravi : “ Si vous n'étiez pas là, je serais perdu ! Venez avec moi, vous m'aiderez à l'habiller. ” Devant la statue, une fanfare joue déjà.",
        translation: "O Linu escorrega nos paralelepípedos molhados, mas pega o chapéu logo antes de uma poça. O Marc fica encantado: “Se o senhor não estivesse aqui, eu estaria perdido! Venha comigo, o senhor vai me ajudar a vesti-lo.” Diante da estátua, uma fanfarra já está tocando.",
        choices: [{ text: "“ Je vous suis ! ”", translation: "“Vou com o senhor!”", next: 'statue' }],
      },
      statue: {
        emoji: '🎺',
        text: "Des touristes se sont rassemblés autour de la statue malgré la pluie. Marc monte sur une petite échelle et habille le Manneken-Pis avec soin. Il se tourne vers Linu : “ Pourriez-vous me passer la trompette, s'il vous plaît ? ”",
        translation: "Turistas se reuniram em volta da estátua apesar da chuva. O Marc sobe numa escadinha e veste o Manneken-Pis com cuidado. Ele se vira para o Linu: “O senhor poderia me passar o trompete, por favor?”",
        choices: [
          { text: "Linu lui passe la petite trompette.", translation: "O Linu lhe passa o trompetezinho.", next: 'diner' },
          {
            text: "Linu lui passe le costume rouge.",
            translation: "O Linu lhe passa o traje vermelho.",
            wrong: "O Marc pediu “la trompette”, o trompete, e ele já está vestindo o traje. “Pourriez-vous me passer…” é um pedido educado no condicional: “O senhor poderia me passar…”.",
          },
        ],
      },
      diner: {
        emoji: '🍟',
        text: "Les touristes applaudissent. Marc serre la patte de Linu : “ Merci ! Je vous invite au dîner, dans la meilleure friterie du quartier. On se retrouve ici à midi ? ”",
        translation: "Os turistas aplaudem. O Marc aperta a nadadeira do Linu: “Obrigado! Convido o senhor para o almoço, na melhor casa de batatas fritas do bairro. A gente se encontra aqui ao meio-dia?”",
        choices: [
          { text: "“ Avec plaisir ! À midi, alors. ”", translation: "“Com prazer! Ao meio-dia, então.”", next: 'final_bom' },
          {
            text: "“ Le dîner ? Alors je reviendrai ce soir, à vingt heures ! ”",
            translation: "“O jantar? Então volto hoje à noite, às oito!”",
            wrong: "Na Bélgica, “le dîner” é o ALMOÇO (o jantar é “le souper”). E o Marc marcou ao meio-dia: “à midi”.",
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: "À midi, Marc et Linu mangent des frites dans un cornet de papier. “ Si vous reveniez en septembre, dit Marc, vous pourriez m'aider à nouveau. ” Linu accepte tout de suite : c'est le travail le plus drôle de Bruxelles !",
        translation: "Ao meio-dia, o Marc e o Linu comem batatas fritas num cone de papel. “Se o senhor voltasse em setembro”, diz o Marc, “poderia me ajudar de novo.” O Linu aceita na hora: é o trabalho mais divertido de Bruxelas!",
        ending: { tone: 'bom', title: 'Camareiro por um dia', message: "O Linu salvou o traje da chuva, ajudou a vestir o Manneken-Pis e aprendeu que, na Bélgica, o “dîner” é ao meio-dia." },
      },
    },
  },

  // ───────────────────────── fr-h21 · B1.3 · Guiana Francesa ─────────────────────────
  {
    id: 'fr-h21',
    level: 'B1.3',
    cefr: 'B1',
    title: "De l'Oyapock à Kourou",
    emoji: '🚀',
    summary: "O Linu atravessa a fronteira do Amapá para a Guiana Francesa e tenta chegar a Kourou a tempo de ver um lançamento de foguete.",
    cultural_context:
      "A Guiana Francesa, departamento e região da França, faz fronteira com o Brasil pelo rio Oiapoque (Oyapock em francês); lá se usa o euro. Em Kourou fica o Centro Espacial Guianense: perto do equador, a rotação da Terra dá mais impulso aos foguetes.",
    start: 'start',
    glossary: [
      ["le fleuve", "o rio (que deságua no mar)"],
      ["la fusée", "o foguete"],
      ["le lancement", "o lançamento"],
      ["le taxi collectif", "a lotação, o táxi compartilhado"],
      ["se reposer", "descansar"],
      ["reporter", "adiar (falso amigo: não é “reportar”)"],
      ["Si j'étais vous, je…", "Se eu fosse o senhor, eu…"],
      ["depuis un quart d'heure", "há quinze minutos"],
    ],
    nodes: {
      start: {
        emoji: '🌉',
        text: "Linu vient d'Oiapoque, au Brésil. Il a traversé le fleuve et arrive à Saint-Georges, en Guyane : ici, on parle français et on paie en euros ! Au poste-frontière, un agent lui demande poliment : “ Où allez-vous, monsieur ? ”",
        translation: "O Linu vem do Oiapoque, no Brasil. Ele atravessou o rio e chega a Saint-Georges, na Guiana: aqui se fala francês e se paga em euros! No posto de fronteira, um agente lhe pergunta educadamente: “Para onde o senhor vai?”",
        choices: [{ text: "“ Je voudrais aller à Kourou : une fusée sera lancée après-demain ! ”", translation: "“Eu gostaria de ir a Kourou: um foguete vai ser lançado depois de amanhã!”", next: 'agent' }],
      },
      agent: {
        emoji: '👮',
        text: "L'agent sourit : “ Ah, le lancement ! Alors vous devriez partir aujourd'hui. Le taxi collectif part à midi, et le voyage dure plusieurs heures. Si j'étais vous, je réserverais une place tout de suite. ”",
        translation: "O agente sorri: “Ah, o lançamento! Então o senhor deveria sair hoje. A lotação sai ao meio-dia, e a viagem dura várias horas. Se eu fosse o senhor, reservaria um lugar agora mesmo.”",
        choices: [
          { text: "“ Merci ! Je vais réserver ma place tout de suite. ”", translation: "“Obrigado! Vou reservar meu lugar agora mesmo.”", next: 'taxi' },
          { text: "“ Je préférerais d'abord me reposer un peu au bord du fleuve. ”", translation: "“Eu preferiria descansar um pouco à beira do rio primeiro.”", next: 'fleuve' },
          {
            text: "“ Parfait, alors je prendrai le taxi ce soir. ”",
            translation: "“Perfeito, então pego a lotação hoje à noite.”",
            wrong: "O agente disse que a lotação sai “à midi”, ao meio-dia, e aconselhou: “si j'étais vous, je réserverais…” (se eu fosse o senhor, reservaria já).",
          },
        ],
      },
      fleuve: {
        emoji: '🛶',
        text: "Linu s'assoit au bord de l'Oyapock et regarde passer les pirogues. Il se repose pendant une heure… puis s'endort. Quand il se réveille, il est midi et quart ! Il court jusqu'à la place : le taxi est parti depuis un quart d'heure.",
        translation: "O Linu se senta à beira do Oiapoque e fica olhando as pirogas passarem. Descansa durante uma hora… e acaba dormindo. Quando acorda, é meio-dia e quinze! Ele corre até a praça: a lotação saiu há quinze minutos.",
        choices: [{ text: "“ Pardon, madame, est-ce qu'il y aurait un autre taxi aujourd'hui ? ”", translation: "“Com licença, senhora, haveria outra lotação hoje?”", next: 'dame' }],
      },
      dame: {
        emoji: '🍌',
        text: "Une vendeuse de fruits lui répond : “ Le prochain part dans trois jours. Mais mon neveu va à Cayenne tout à l'heure en camionnette. Si vous l'aidiez à charger les bananes, il vous emmènerait sûrement ! ”",
        translation: "Uma vendedora de frutas lhe responde: “A próxima sai daqui a três dias. Mas o meu sobrinho vai a Caiena daqui a pouco de caminhonete. Se o senhor o ajudasse a carregar as bananas, ele com certeza o levaria!”",
        choices: [
          { text: "“ Je le ferais avec plaisir ! ”", translation: "“Eu faria isso com prazer!”", next: 'route' },
          { text: "“ Tant pis, j'attendrai le prochain taxi. ”", translation: "“Paciência, vou esperar a próxima lotação.”", next: 'final_rate' },
        ],
      },
      final_rate: {
        emoji: '📺',
        text: "Linu reste à Saint-Georges. Le jour du lancement, il regarde la fusée à la télévision, dans un petit restaurant au bord du fleuve. “ La prochaine fois, je me reposerai dans le taxi ! ” soupire-t-il.",
        translation: "O Linu fica em Saint-Georges. No dia do lançamento, ele assiste ao foguete pela televisão, num restaurantezinho à beira do rio. “Da próxima vez, vou descansar dentro da lotação!”, suspira.",
        ending: { tone: 'neutro', title: 'Foguete pela TV', message: "O Linu dormiu à beira do rio, perdeu a lotação e viu o lançamento só pela televisão." },
      },
      route: {
        emoji: '🚚',
        text: "Linu charge les bananes pendant une demi-heure, puis il monte dans la camionnette. La route traverse la forêt pendant des heures. À Cayenne, Kévin, le neveu, lui trouve un bus pour Kourou : “ Tu arriveras juste à temps ! ”",
        translation: "O Linu carrega as bananas durante meia hora e depois sobe na caminhonete. A estrada atravessa a floresta durante horas. Em Caiena, o Kévin, o sobrinho, arruma para ele um ônibus para Kourou: “Você vai chegar bem na hora!”",
        choices: [{ text: "“ Merci mille fois, Kévin ! ”", translation: "“Mil vezes obrigado, Kévin!”", next: 'kourou' }],
      },
      taxi: {
        emoji: '🚐',
        text: "Dans le taxi collectif, Linu est assis à côté de Léa, une ingénieure qui travaille au centre spatial depuis cinq ans. “ Vous vous intéressez aux fusées ? Si vous vouliez, je pourrais vous dire d'où on voit le mieux le lancement. ”",
        translation: "Na lotação, o Linu está sentado ao lado da Léa, uma engenheira que trabalha no centro espacial há cinco anos. “O senhor se interessa por foguetes? Se quisesse, eu poderia lhe dizer de onde se vê melhor o lançamento.”",
        choices: [{ text: "“ Oh oui, ça me ferait très plaisir ! ”", translation: "“Ah, sim, eu adoraria!”", next: 'kourou' }],
      },
      kourou: {
        emoji: '🏖️',
        text: "La veille du lancement, Linu se promène sur la plage de Kourou. Un pêcheur lui dit : “ Demain, si le temps était mauvais, le lancement serait reporté. Mais regarde le ciel : il n'y a pas un nuage. Tu devrais te lever tôt et venir ici, sur la plage. ”",
        translation: "Na véspera do lançamento, o Linu passeia pela praia de Kourou. Um pescador lhe diz: “Amanhã, se o tempo estivesse ruim, o lançamento seria adiado. Mas olhe o céu: não tem uma nuvem. Você deveria acordar cedo e vir aqui, para a praia.”",
        choices: [
          { text: "“ Je me lèverai à l'aube, promis ! ”", translation: "“Vou me levantar de madrugada, prometo!”", next: 'final_bom' },
          {
            text: "“ Oh non, le lancement est déjà reporté ? ”",
            translation: "“Ah, não, o lançamento já foi adiado?”",
            wrong: "O pescador fez uma hipótese: “si le temps était mauvais, le lancement serait reporté” (se o tempo estivesse ruim, seria adiado). Mas o céu está limpo: o lançamento está mantido!",
          },
        ],
      },
      final_bom: {
        emoji: '🚀',
        text: "Le lendemain, Linu est sur la plage avec des dizaines de personnes. Le compte à rebours commence : “ Dix, neuf, huit… ” Une lumière immense s'élève au-dessus de la forêt, puis le bruit arrive, comme un tonnerre. Linu n'a jamais rien vu d'aussi beau.",
        translation: "No dia seguinte, o Linu está na praia com dezenas de pessoas. A contagem regressiva começa: “Dez, nove, oito…” Uma luz imensa sobe acima da floresta, depois chega o barulho, como um trovão. O Linu nunca viu nada tão bonito.",
        ending: { tone: 'bom', title: 'Decolagem na Guiana', message: "Do Oiapoque a Kourou, o Linu chegou a tempo de ver o foguete subir sobre a floresta." },
      },
    },
  },

  // ───────────────────────── fr-h22 · B1.4 · Lyon ─────────────────────────
  {
    id: 'fr-h22',
    level: 'B1.4',
    cefr: 'B1',
    title: "Des lumignons pour le 8 décembre",
    emoji: '🕯️',
    summary: "Em Lyon, a família da Inès prepara as velinhas da Fête des Lumières, e o Linu atravessa a cidade para ver as luzes.",
    cultural_context:
      "Todo 8 de dezembro, os moradores de Lyon põem velinhas em copinhos coloridos, os “lumignons”, nas janelas. A tradição vem de 1852: a inauguração da estátua da Virgem na colina de Fourvière foi prejudicada pelo mau tempo, mas à noite o céu abriu e os lioneses iluminaram as janelas. Hoje a Fête des Lumières dura alguns dias e ilumina os monumentos da cidade.",
    start: 'start',
    glossary: [
      ["le lumignon", "a velinha num copinho (da Fête des Lumières)"],
      ["la traboule", "passagem por dentro dos prédios, no Vieux-Lyon"],
      ["il faut que tu nous aides", "é preciso que você nos ajude"],
      ["je veux que tu viennes", "quero que você venha"],
      ["avoir peur que… (+ subjuntivo)", "ter medo de que…"],
      ["le bouchon", "restaurante típico de Lyon (e também a rolha)"],
      ["la colline", "a colina"],
    ],
    nodes: {
      start: {
        emoji: '🏙️',
        text: "Lyon, le 8 décembre, en fin d'après-midi. Linu arrive chez son amie Inès, qui habite dans le Vieux-Lyon. La grand-mère d'Inès l'accueille : “ Tu arrives au bon moment ! Il faut que tu nous aides : il faut que tous les lumignons soient sur les fenêtres avant la nuit. ”",
        translation: "Lyon, 8 de dezembro, fim de tarde. O Linu chega à casa da amiga Inès, que mora no Vieux-Lyon. A avó da Inès o recebe: “Você chegou na hora certa! Você precisa nos ajudar: é preciso que todas as velinhas estejam nas janelas antes de anoitecer.”",
        choices: [
          { text: "“ Bien sûr ! Qu'est-ce que je dois faire ? ”", translation: "“Claro! O que eu tenho que fazer?”", next: 'fenetres' },
          {
            text: "“ Pas de problème, on les installera demain matin. ”",
            translation: "“Sem problema, a gente arruma amanhã de manhã.”",
            wrong: "A avó disse que é preciso que as velinhas estejam nas janelas “avant la nuit”, antes de anoitecer. “Il faut que” + subjuntivo (“soient”) expressa uma necessidade: é para hoje, já!",
          },
        ],
      },
      fenetres: {
        emoji: '🪟',
        text: "Inès donne à Linu une boîte de petits verres colorés. “ Ma grand-mère veut que chaque fenêtre ait six lumignons, dit-elle. Et elle a peur que le vent les éteigne, alors il faut qu'on les mette bien au fond. ” Linu en pose un, puis deux, puis trois…",
        translation: "A Inès dá ao Linu uma caixa de copinhos coloridos. “Minha avó quer que cada janela tenha seis velinhas”, diz ela. “E ela tem medo de que o vento as apague, então é preciso colocá-las bem no fundo.” O Linu põe uma, depois duas, depois três…",
        choices: [
          { text: "“ Voilà, toutes les fenêtres sont prêtes ! ”", translation: "“Pronto, todas as janelas estão prontas!”", next: 'sortie' },
          { text: "“ Et pourquoi est-ce qu'on fait ça le 8 décembre ? ”", translation: "“E por que se faz isso no dia 8 de dezembro?”", next: 'histoire' },
        ],
      },
      histoire: {
        emoji: '📜',
        text: "La grand-mère s'assoit près de la fenêtre. “ En 1852, on devait inaugurer la statue de la Vierge, là-haut, sur la colline de Fourvière. Il a fait très mauvais temps, et la fête a été annulée. Mais le soir, le ciel s'est éclairci, et les Lyonnais ont allumé des bougies à leurs fenêtres. Depuis, je veux que ma maison brille chaque année comme en 1852 ! ”",
        translation: "A avó se senta perto da janela. “Em 1852, iam inaugurar a estátua da Virgem, lá em cima, na colina de Fourvière. Fez um tempo péssimo, e a festa foi cancelada. Mas à noite o céu abriu, e os lioneses acenderam velas nas janelas. Desde então, quero que a minha casa brilhe todo ano como em 1852!”",
        choices: [
          { text: "“ Quelle belle histoire ! Il faut que je la raconte à mes amis. ”", translation: "“Que história bonita! Preciso contá-la aos meus amigos.”", next: 'sortie' },
          {
            text: "“ Donc les Lyonnais ont allumé les bougies parce qu'il pleuvait ? ”",
            translation: "“Então os lioneses acenderam as velas porque estava chovendo?”",
            wrong: "A avó contou que a festa foi cancelada por causa do mau tempo, mas que à noite o céu abriu (“s'est éclairci”), e ENTÃO os lioneses acenderam as velas.",
          },
        ],
      },
      sortie: {
        emoji: '🌉',
        text: "À la nuit, toutes les fenêtres brillent. Inès lit un message sur son téléphone : “ Mon frère Hugo dit qu'il nous attend sur la place Bellecour, qu'il y a déjà beaucoup de monde et qu'il faut qu'on se dépêche. ” Pour y aller, on peut prendre les rues ou passer par les traboules.",
        translation: "Ao anoitecer, todas as janelas brilham. A Inès lê uma mensagem no celular: “Meu irmão Hugo diz que está nos esperando na praça Bellecour, que já tem muita gente e que a gente precisa se apressar.” Para ir até lá, dá para pegar as ruas ou passar pelas traboules.",
        choices: [
          { text: "“ Passons par les traboules ! ”", translation: "“Vamos pelas traboules!”", next: 'traboules' },
          { text: "“ Prenons les rues, c'est plus simple. ”", translation: "“Vamos pelas ruas, é mais simples.”", next: 'foule' },
        ],
      },
      traboules: {
        emoji: '🚪',
        text: "Inès pousse une vieille porte et entre dans un couloir sombre. Ils traversent une cour, montent un escalier, passent sous des arches. “ Il ne faut pas qu'on fasse de bruit, murmure Inès, des gens habitent ici. ” Tout à coup, ils ressortent dans une autre rue, tout près du pont.",
        translation: "A Inès empurra uma porta velha e entra num corredor escuro. Eles atravessam um pátio, sobem uma escada, passam debaixo de arcos. “A gente não pode fazer barulho”, sussurra a Inès, “tem gente morando aqui.” De repente, eles saem em outra rua, bem perto da ponte.",
        choices: [{ text: "“ C'est génial ! On sera là avant Hugo ! ”", translation: "“Que demais! Vamos chegar antes do Hugo!”", next: 'spectacle' }],
      },
      foule: {
        emoji: '👥',
        text: "Dans les rues, la foule est immense, et Linu avance très lentement. Le téléphone d'Inès sonne : c'est Hugo. Inès répète à Linu : “ Hugo dit qu'il ne nous voit pas et qu'il part vers la cathédrale Saint-Jean. Il veut qu'on le retrouve là-bas. ”",
        translation: "Nas ruas, a multidão é imensa, e o Linu avança bem devagar. O celular da Inès toca: é o Hugo. A Inès repete para o Linu: “O Hugo diz que não está nos vendo e que está indo para a catedral Saint-Jean. Ele quer que a gente o encontre lá.”",
        choices: [
          { text: "“ D'accord, allons à la cathédrale. ”", translation: "“Tá bom, vamos para a catedral.”", next: 'spectacle' },
          { text: "“ Je suis fatigué, je préfère qu'on rentre. ”", translation: "“Estou cansado, prefiro que a gente volte para casa.”", next: 'final_maison' },
          {
            text: "“ Alors Hugo nous attend toujours sur la place Bellecour ? ”",
            translation: "“Então o Hugo continua nos esperando na praça Bellecour?”",
            wrong: "A Inès repetiu o que o Hugo disse: ele NÃO os está vendo e vai para a catedral (“il part vers la cathédrale Saint-Jean”). Ele quer que eles o encontrem lá.",
          },
        ],
      },
      final_maison: {
        emoji: '🏠',
        text: "Linu et Inès rentrent à la maison. Devant la fenêtre, avec la grand-mère, ils regardent les lumignons et les lumières de la ville au loin. Ce n'est pas le grand spectacle, mais c'est une soirée très douce.",
        translation: "O Linu e a Inès voltam para casa. Diante da janela, com a avó, eles olham as velinhas e as luzes da cidade ao longe. Não é o grande espetáculo, mas é uma noite muito gostosa.",
        ending: { tone: 'neutro', title: 'Luzes da janela', message: "O Linu não viu os monumentos iluminados, mas passou uma noite tranquila com a família da Inès." },
      },
      spectacle: {
        emoji: '🎆',
        text: "Enfin, ils retrouvent Hugo. Sur la façade d'un grand bâtiment, des images géantes dansent en musique : des fleurs, des oiseaux, des vagues. Hugo propose : “ Après, je voudrais qu'on aille manger dans un bouchon. Tu as déjà goûté les quenelles ? ”",
        translation: "Finalmente eles encontram o Hugo. Na fachada de um grande edifício, imagens gigantes dançam com música: flores, pássaros, ondas. O Hugo propõe: “Depois, eu queria que a gente fosse comer num bouchon. Você já provou as quenelles?”",
        choices: [{ text: "“ Pas encore ! Il faut absolument que j'y goûte. ”", translation: "“Ainda não! Preciso provar de qualquer jeito.”", next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: "Au bouchon, Linu mange des quenelles et une tarte aux pralines roses. En rentrant, il voit les lumignons de la grand-mère qui brillent encore. “ Je veux que tu reviennes l'année prochaine ”, lui dit-elle. Linu répond qu'il reviendra, c'est promis.",
        translation: "No bouchon, o Linu come quenelles e uma torta de pralinas cor-de-rosa. Ao voltar, ele vê as velinhas da avó ainda brilhando. “Quero que você volte ano que vem”, diz ela. O Linu responde que vai voltar, é promessa.",
        ending: { tone: 'bom', title: 'Lyon iluminada', message: "O Linu acendeu as velinhas, atravessou a cidade e viu a Fête des Lumières com os amigos." },
      },
    },
  },

  // ───────────────────────── fr-h23 · B1.4 · Bretanha ─────────────────────────
  {
    id: 'fr-h23',
    level: 'B1.4',
    cefr: 'B1',
    title: "Le petit doigt du fest-noz",
    emoji: '🎶',
    summary: "Num vilarejo perto de Quimper, na Bretanha, o Linu vai ao seu primeiro fest-noz e aprende a dançar de mindinho dado.",
    cultural_context:
      "O fest-noz (“festa da noite”, em bretão) é um baile tradicional da Bretanha, com danças em roda ou em fila, de mãos ou de dedos mindinhos dados, ao som de cantores e instrumentos. Foi inscrito como Patrimônio Cultural Imaterial da Humanidade pela UNESCO em 2012.",
    start: 'start',
    glossary: [
      ["le fest-noz", "o baile noturno tradicional bretão"],
      ["le petit doigt", "o dedo mindinho"],
      ["la galette de sarrasin", "a panqueca salgada de trigo-sarraceno"],
      ["la ronde", "a roda (de dança)"],
      ["il suffit que tu regardes", "basta que você olhe"],
      ["il faut que tes pas soient…", "é preciso que os seus passos sejam…"],
      ["je veux que tu viennes", "quero que você venha"],
    ],
    nodes: {
      start: {
        emoji: '🌙',
        text: "Un samedi soir, dans un village près de Quimper. Des voitures sont garées partout autour de la salle des fêtes. Gwen, la voisine de Linu, l'attend à l'entrée : “ Ce soir, il y a un fest-noz ! Je veux que tu viennes danser avec nous. ”",
        translation: "Um sábado à noite, num vilarejo perto de Quimper. Há carros estacionados por toda parte em volta do salão de festas. A Gwen, vizinha do Linu, está esperando por ele na entrada: “Hoje tem fest-noz! Quero que você venha dançar com a gente.”",
        choices: [
          { text: "“ Je veux bien, mais j'ai peur de ne pas savoir danser. ”", translation: "“Eu topo, mas tenho medo de não saber dançar.”", next: 'entree' },
          { text: "“ D'abord, il faut que je mange quelque chose ! ”", translation: "“Antes, preciso comer alguma coisa!”", next: 'crepes' },
        ],
      },
      crepes: {
        emoji: '🥞',
        text: "Au stand, un monsieur prépare des galettes de sarrasin. “ Une complète ? Il faut que tu la goûtes avec du cidre ! ” Linu mange une galette, puis une crêpe au caramel au beurre salé. Pendant ce temps, la musique commence dans la salle.",
        translation: "Na barraca, um senhor prepara galettes de trigo-sarraceno. “Uma completa? Você tem que provar com sidra!” O Linu come uma galette, depois um crepe de caramelo com manteiga salgada. Enquanto isso, a música começa no salão.",
        choices: [
          { text: "“ Allons danser, maintenant ! ”", translation: "“Agora vamos dançar!”", next: 'entree' },
          { text: "“ Encore une crêpe, s'il vous plaît ! ”", translation: "“Mais um crepe, por favor!”", next: 'final_crepes' },
        ],
      },
      final_crepes: {
        emoji: '🫠',
        text: "Linu mange une troisième crêpe, puis une quatrième. Quand il arrive enfin dans la salle, la dernière danse se termine. Gwen hausse les épaules : “ Tu as goûté toutes les crêpes de Bretagne, mais tu n'as pas dansé une seule fois ! ”",
        translation: "O Linu come um terceiro crepe, depois um quarto. Quando finalmente chega ao salão, a última dança está terminando. A Gwen dá de ombros: “Você provou todos os crepes da Bretanha, mas não dançou nem uma vez!”",
        ending: { tone: 'neutro', title: 'Crepes demais', message: "Barriga cheia, mas nenhuma dança: o fest-noz acabou sem o Linu." },
      },
      entree: {
        emoji: '🎻',
        text: "Gwen rit : “ Ce n'est pas grave. Il suffit que tu regardes les pieds de ton voisin et que tu suives le rythme. ” Dans la salle, des centaines de personnes dansent en une longue chaîne. Sur la scène, deux chanteurs se répondent, phrase après phrase.",
        translation: "A Gwen ri: “Não tem problema. Basta que você olhe os pés do seu vizinho e siga o ritmo.” No salão, centenas de pessoas dançam numa longa corrente. No palco, dois cantores se respondem, frase após frase.",
        choices: [
          { text: "Linu entre dans la ronde.", translation: "O Linu entra na roda.", next: 'ronde' },
          {
            text: "“ Donc je dois regarder les chanteurs, pas les danseurs ? ”",
            translation: "“Então tenho que olhar os cantores, não os dançarinos?”",
            wrong: "A Gwen disse que basta que ele olhe “les pieds de ton voisin”, os pés do vizinho de dança, e siga o ritmo. Não é preciso olhar os cantores.",
          },
        ],
      },
      ronde: {
        emoji: '💃',
        text: "Linu se retrouve entre Gwen et un vieux monsieur qui lui tient le petit doigt. La chaîne avance, recule, tourne. Le monsieur lui dit gentiment : “ Il faut que tes pas soient plus petits, sinon tu vas marcher sur mes pieds ! ”",
        translation: "O Linu fica entre a Gwen e um senhor idoso que segura o mindinho dele. A corrente avança, recua, gira. O senhor lhe diz com gentileza: “É preciso que os seus passos sejam menores, senão você vai pisar nos meus pés!”",
        choices: [
          { text: "Linu fait de tout petits pas et regarde son voisin.", translation: "O Linu dá passinhos bem curtos e olha o vizinho.", next: 'rythme' },
          {
            text: "Linu fait de très grands pas pour aller plus vite.",
            translation: "O Linu dá passos bem grandes para ir mais rápido.",
            wrong: "O senhor pediu que os passos fossem MENORES (“plus petits”), senão o Linu ia pisar nos pés dele. “Il faut que tes pas soient…” usa o subjuntivo de “être”.",
          },
        ],
      },
      rythme: {
        emoji: '🎵',
        text: "Après une demi-heure, Linu danse presque comme un Breton. Entre deux danses, la chanteuse parle à Gwen, qui traduit : “ Elle dit qu'elle adore ton style et qu'elle veut que tu montes sur scène pour la prochaine chanson ! ”",
        translation: "Depois de meia hora, o Linu já dança quase como um bretão. Entre duas danças, a cantora fala com a Gwen, que traduz: “Ela diz que adora o seu estilo e que quer que você suba ao palco na próxima música!”",
        choices: [
          { text: "“ Moi ? Sur scène ? D'accord ! ”", translation: "“Eu? No palco? Tá bom!”", next: 'final_bom' },
          { text: "“ Dis-lui que je suis trop timide, mais merci ! ”", translation: "“Diga a ela que sou tímido demais, mas obrigado!”", next: 'final_ronde' },
        ],
      },
      final_bom: {
        emoji: '🎤',
        text: "Sur scène, la chanteuse chante une phrase, et Linu doit la répéter. Il ne comprend pas les mots bretons, mais il imite les sons de son mieux. Toute la salle applaudit, et quelqu'un crie : “ Il faut que tu reviennes au prochain fest-noz ! ”",
        translation: "No palco, a cantora canta uma frase, e o Linu tem que repeti-la. Ele não entende as palavras em bretão, mas imita os sons o melhor que pode. O salão inteiro aplaude, e alguém grita: “Você tem que voltar no próximo fest-noz!”",
        ending: { tone: 'bom', title: 'Um pinguim no fest-noz', message: "O Linu aprendeu a dançar de mindinho dado e ainda cantou no palco em bretão." },
      },
      final_ronde: {
        emoji: '🤝',
        text: "Gwen explique à la chanteuse que Linu est timide. Il continue à danser dans la ronde jusqu'à deux heures du matin, le petit doigt dans celui de son voisin. Il n'est pas monté sur scène, mais il a appris trois danses.",
        translation: "A Gwen explica à cantora que o Linu é tímido. Ele continua dançando na roda até as duas da manhã, de mindinho dado com o vizinho. Não subiu ao palco, mas aprendeu três danças.",
        ending: { tone: 'bom', title: 'Três danças novas', message: "Sem palco, mas com muita dança: o Linu passou a noite inteira na roda do fest-noz." },
      },
    },
  },

  // ───────────────────────── fr-h24 · B1.4 · Reunião ─────────────────────────
  {
    id: 'fr-h24',
    level: 'B1.4',
    cefr: 'B1',
    title: "Un colis pour Mafate",
    emoji: '🥾',
    summary: "Na ilha da Reunião, o Linu atravessa a pé o circo de Mafate, onde não chega nenhuma estrada, para entregar uma encomenda.",
    cultural_context:
      "O circo de Mafate, na ilha da Reunião, só é acessível a pé ou de helicóptero: nenhuma estrada chega às suas pequenas vilas, os “îlets”. Os “Pitons, cirques et remparts” da ilha são Patrimônio Mundial da UNESCO desde 2010.",
    start: 'start',
    glossary: [
      ["le cirque", "o circo (vale cercado de paredões) — e também o circo de palhaços"],
      ["l'îlet", "pequena vila isolada, na Reunião"],
      ["le colis", "a encomenda, o pacote"],
      ["le gîte", "a pousada (de trilha)"],
      ["le cari", "o caril, prato típico da Reunião"],
      ["il vaut mieux que tu partes", "é melhor que você parta"],
      ["j'espère que tu as faim", "espero que você esteja com fome (espérer + indicativo!)"],
    ],
    nodes: {
      start: {
        emoji: '🏔️',
        text: "La Réunion. Linu loge dans un gîte au bord du cirque de Mafate. La propriétaire, Mme Payet, lui tend un petit colis : “ C'est pour ma sœur, qui habite à l'îlet de Marla. Il n'y a pas de route, alors il faut que quelqu'un le porte à pied. Tu veux bien ? ”",
        translation: "Ilha da Reunião. O Linu está hospedado numa pousada à beira do circo de Mafate. A dona, a Sra. Payet, lhe entrega um pacotinho: “É para a minha irmã, que mora no îlet de Marla. Não tem estrada, então é preciso que alguém o leve a pé. Você topa?”",
        choices: [
          { text: "“ Avec plaisir ! Je pars quand ? ”", translation: "“Com prazer! Quando eu saio?”", next: 'depart' },
          {
            text: "“ D'accord, je prendrai la voiture demain. ”",
            translation: "“Tá bom, amanhã eu pego o carro.”",
            wrong: "A Sra. Payet disse “il n'y a pas de route”: não há estrada até Marla. Por isso é preciso que alguém leve o pacote a pé.",
          },
        ],
      },
      depart: {
        emoji: '🌄',
        text: "“ Il vaut mieux que tu partes tôt, dit Mme Payet, parce que les nuages arrivent souvent l'après-midi. Et il faut que tu prennes beaucoup d'eau. ” Le lendemain, à six heures, Linu descend le sentier avec le colis dans son sac.",
        translation: "“É melhor que você saia cedo”, diz a Sra. Payet, “porque as nuvens costumam chegar à tarde. E é preciso que você leve bastante água.” No dia seguinte, às seis horas, o Linu desce a trilha com o pacote na mochila.",
        choices: [
          { text: "Linu marche d'un bon pas pour arriver avant les nuages.", translation: "O Linu caminha em bom ritmo para chegar antes das nuvens.", next: 'col' },
          { text: "Linu s'arrête pour photographier chaque cascade.", translation: "O Linu para para fotografar cada cachoeira.", next: 'cascades' },
        ],
      },
      cascades: {
        emoji: '📸',
        text: "Les cascades sont magnifiques, et Linu prend cent photos. Mais à midi, il n'est qu'à la moitié du chemin, et le brouillard commence à monter. Un randonneur lui dit : “ Il vaut mieux que tu ne continues pas seul dans le brouillard. Il y a un gîte juste ici. ”",
        translation: "As cachoeiras são lindas, e o Linu tira cem fotos. Mas ao meio-dia ele está só na metade do caminho, e a neblina começa a subir. Um trilheiro lhe diz: “É melhor que você não continue sozinho na neblina. Tem uma pousada logo aqui.”",
        choices: [{ text: "“ Vous avez raison, je m'arrête ici. ”", translation: "“O senhor tem razão, vou parar aqui.”", next: 'final_brouillard' }],
      },
      final_brouillard: {
        emoji: '🌫️',
        text: "Linu dort dans le petit gîte, au milieu du cirque. Le lendemain matin, il livre enfin le colis à Marla, avec un jour de retard. La sœur de Mme Payet rit : “ Ici, tout le monde est en retard à cause du brouillard ! ”",
        translation: "O Linu dorme na pequena pousada, no meio do circo. Na manhã seguinte, ele finalmente entrega o pacote em Marla, com um dia de atraso. A irmã da Sra. Payet ri: “Aqui todo mundo se atrasa por causa da neblina!”",
        ending: { tone: 'neutro', title: 'Um dia de atraso', message: "Fotos lindas, mas a neblina chegou antes do Linu. O pacote foi entregue no dia seguinte." },
      },
      col: {
        emoji: '🚁',
        text: "Après trois heures de marche, Linu arrive au col. En bas, il voit les toits de Marla, au milieu des montagnes. Un hélicoptère passe au-dessus de lui avec un grand filet. Un vieil homme assis sur un rocher lui explique : “ Ici, le riz, le gaz, les matériaux, tout arrive par hélicoptère. Mais les gens, eux, arrivent à pied. ”",
        translation: "Depois de três horas de caminhada, o Linu chega ao colo da montanha. Lá embaixo, ele vê os telhados de Marla, no meio das montanhas. Um helicóptero passa acima dele com uma grande rede. Um senhor sentado numa pedra lhe explica: “Aqui, o arroz, o gás, os materiais, tudo chega de helicóptero. Mas as pessoas chegam a pé.”",
        choices: [
          { text: "“ Je dois porter ce colis à la sœur de Mme Payet. ”", translation: "“Tenho que levar este pacote para a irmã da Sra. Payet.”", next: 'marla' },
          {
            text: "“ Donc les habitants voyagent tous en hélicoptère ? ”",
            translation: "“Então os moradores viajam todos de helicóptero?”",
            wrong: "O senhor disse que as COISAS (arroz, gás, materiais) chegam de helicóptero, mas que as pessoas, “eux”, chegam a pé.",
          },
        ],
      },
      marla: {
        emoji: '🏡',
        text: "Le vieil homme montre une maison bleue : “ C'est chez elle, là-bas. Elle veut que tous les visiteurs mangent chez elle, alors j'espère que tu as faim ! ” Linu frappe à la porte. Une dame ouvre et reconnaît tout de suite le colis : “ Entre, entre ! Il faut que tu te reposes. ”",
        translation: "O senhor aponta uma casa azul: “É a casa dela, ali. Ela quer que todos os visitantes comam na casa dela, então espero que você esteja com fome!” O Linu bate à porta. Uma senhora abre e reconhece na hora o pacote: “Entre, entre! Você precisa descansar.”",
        choices: [{ text: "“ Merci ! Qu'est-ce qu'il y a dans le colis ? ”", translation: "“Obrigado! O que tem no pacote?”", next: 'colis' }],
      },
      colis: {
        emoji: '🎁',
        text: "La dame ouvre le colis : il y a des graines de géranium et une lettre. Elle la lit et sourit : “ Ma sœur dit qu'elle va bien et qu'elle veut que je vienne la voir à Noël. ” Puis elle sert à Linu un cari de poulet avec du riz et des grains.",
        translation: "A senhora abre o pacote: tem sementes de gerânio e uma carta. Ela lê e sorri: “Minha irmã diz que está bem e que quer que eu vá visitá-la no Natal.” Depois ela serve ao Linu um caril de frango com arroz e feijão.",
        choices: [
          { text: "“ Est-ce que je pourrais dormir ici et repartir demain matin ? ”", translation: "“Eu poderia dormir aqui e voltar amanhã de manhã?”", next: 'final_bom' },
          { text: "“ Il faut que je reparte tout de suite, merci pour tout ! ”", translation: "“Preciso voltar agora mesmo, obrigado por tudo!”", next: 'final_nuit' },
        ],
      },
      final_bom: {
        emoji: '🌌',
        text: "“ Bien sûr ! Ici, personne ne repart l'après-midi. ” Le soir, sous un ciel plein d'étoiles, Linu écoute les histoires de Mafate. Le lendemain, il remonte le sentier avec une lettre pour Mme Payet dans son sac.",
        translation: "“Claro! Aqui ninguém volta à tarde.” À noite, debaixo de um céu cheio de estrelas, o Linu ouve as histórias de Mafate. No dia seguinte, ele sobe a trilha com uma carta para a Sra. Payet na mochila.",
        ending: { tone: 'bom', title: 'Carteiro de Mafate', message: "O Linu entregou o pacote a pé, dormiu sob as estrelas e voltou com uma resposta." },
      },
      final_nuit: {
        emoji: '🌧️',
        text: "Linu remonte le sentier l'après-midi. Les nuages arrivent, comme Mme Payet l'avait dit. Il arrive au gîte à la nuit, trempé et épuisé. “ Il faut vraiment que tu écoutes les gens d'ici ! ” rit Mme Payet.",
        translation: "O Linu sobe a trilha à tarde. As nuvens chegam, como a Sra. Payet tinha avisado. Ele chega à pousada de noite, encharcado e exausto. “Você precisa mesmo ouvir o pessoal daqui!”, ri a Sra. Payet.",
        ending: { tone: 'neutro', title: 'Volta na chuva', message: "Missão cumprida, mas o Linu voltou à tarde e pegou as nuvens no caminho." },
      },
    },
  },

  // ───────────────────────── fr-h25 · B2.1 · Marselha ─────────────────────────
  {
    id: 'fr-h25',
    level: 'B2.1',
    cefr: 'B2',
    title: "Le bateau était déjà parti",
    emoji: '⛵',
    summary: "Em Marselha, o Linu perde o barco para as Calanques e precisa dar um jeito de encontrar os amigos na enseada de En-Vau.",
    cultural_context:
      "As Calanques, enseadas de rocha calcária entre Marselha e Cassis, formam desde 2012 um parque nacional. No verão, nos dias de vento forte e de risco alto de incêndio, as trilhas do maciço podem ser fechadas ao público.",
    start: 'start',
    glossary: [
      ["la calanque", "enseada estreita entre falésias de calcário"],
      ["le Vieux-Port", "o porto antigo de Marselha"],
      ["le massif", "o maciço (as montanhas)"],
      ["il avait mal réglé", "ele tinha programado errado (mais-que-perfeito)"],
      ["j'aurais dû", "eu deveria ter"],
      ["Si tu étais arrivé…, tu serais…", "Se você tivesse chegado…, estaria…"],
      ["il m'a dit qu'il allait…", "ele me disse que ia…"],
    ],
    nodes: {
      start: {
        emoji: '⏰',
        text: "Marseille, huit heures dix. Linu arrive en courant sur le Vieux-Port, mais le bateau pour les calanques est déjà loin. La veille, ses amis Yanis et Clara lui avaient dit que le départ était à huit heures précises. Il avait mis son réveil, mais il l'avait mal réglé.",
        translation: "Marselha, oito e dez. O Linu chega correndo ao Vieux-Port, mas o barco para as Calanques já vai longe. Na véspera, os amigos Yanis e Clara tinham dito a ele que a saída era às oito em ponto. Ele tinha posto o despertador, mas tinha programado errado.",
        choices: [
          { text: "Linu appelle Yanis.", translation: "O Linu liga para o Yanis.", next: 'appel' },
          {
            text: "Linu s'assoit sur le quai : le bateau partira dans quelques minutes.",
            translation: "O Linu se senta no cais: o barco vai sair daqui a alguns minutos.",
            wrong: "O barco “est déjà loin”: já saiu. Os amigos tinham dito (“lui avaient dit”) que a saída era às oito em ponto, e o Linu chegou às oito e dez.",
          },
        ],
      },
      appel: {
        emoji: '📱',
        text: "Yanis décroche : “ On t'a attendu cinq minutes, mais le capitaine ne voulait plus attendre. Si tu étais arrivé un peu plus tôt, tu serais avec nous ! On sera à la calanque d'En-Vau vers dix heures. Tu pourrais peut-être venir à pied depuis Cassis ? ”",
        translation: "O Yanis atende: “A gente te esperou cinco minutos, mas o capitão não quis esperar mais. Se você tivesse chegado um pouco mais cedo, estaria com a gente! Vamos estar na calanque de En-Vau lá pelas dez. Será que você não podia vir a pé de Cassis?”",
        choices: [
          { text: "“ D'accord, je prends le bus pour Cassis ! ”", translation: "“Tá bom, vou pegar o ônibus para Cassis!”", next: 'cassis' },
          { text: "“ Et si je louais plutôt un kayak ici ? ”", translation: "“E se eu alugasse um caiaque aqui?”", next: 'kayak' },
        ],
      },
      kayak: {
        emoji: '🛶',
        text: "Le loueur de kayaks le regarde, surpris : “ En-Vau ? C'est beaucoup trop loin d'ici ! Si tu m'avais posé la question hier, je t'aurais conseillé de partir de Cassis. Et avec ce vent, je ne te laisserai pas partir. ”",
        translation: "O homem que aluga caiaques olha para ele, surpreso: “En-Vau? É longe demais daqui! Se você tivesse me perguntado ontem, eu teria aconselhado sair de Cassis. E com esse vento, não vou deixar você ir.”",
        choices: [{ text: "“ Bon, alors je prends le bus pour Cassis. ”", translation: "“Bom, então vou pegar o ônibus para Cassis.”", next: 'cassis' }],
      },
      cassis: {
        emoji: '🚧',
        text: "À Cassis, un garde du parc arrête Linu à l'entrée du sentier : “ Désolé, le massif est fermé aujourd'hui. Le vent est trop fort, et le risque d'incendie est très élevé. On l'avait annoncé dès hier soir. ” Linu soupire : s'il avait lu les informations, il aurait su que le chemin serait fermé.",
        translation: "Em Cassis, um guarda do parque para o Linu na entrada da trilha: “Sinto muito, o maciço está fechado hoje. O vento está forte demais, e o risco de incêndio está muito alto. Isso tinha sido anunciado já ontem à noite.” O Linu suspira: se tivesse lido os avisos, saberia que o caminho estaria fechado.",
        choices: [
          { text: "“ Est-ce qu'il y aurait un autre moyen d'y aller ? ”", translation: "“Haveria algum outro jeito de chegar lá?”", next: 'garde' },
          { text: "“ Tant pis, je passerai la journée à Cassis. ”", translation: "“Paciência, vou passar o dia em Cassis.”", next: 'final_cassis' },
        ],
      },
      final_cassis: {
        emoji: '🍦',
        text: "Linu se promène sur le port de Cassis, mange une glace et regarde les bateaux. Le soir, Yanis lui envoie une photo de la calanque, avec de l'eau turquoise. Linu se dit qu'il aurait dû vérifier son réveil… et les informations du parc.",
        translation: "O Linu passeia pelo porto de Cassis, toma um sorvete e fica olhando os barcos. À noite, o Yanis lhe manda uma foto da calanque, com água azul-turquesa. O Linu pensa que deveria ter conferido o despertador… e os avisos do parque.",
        ending: { tone: 'neutro', title: 'Um dia em Cassis', message: "Cassis é linda, mas o Linu não chegou às Calanques. Da próxima vez: despertador e avisos conferidos!" },
      },
      garde: {
        emoji: '⚓',
        text: "Le garde réfléchit : “ Les bateaux, eux, peuvent circuler. Un pêcheur m'a dit ce matin qu'il allait vers En-Vau à neuf heures et demie. S'il n'est pas encore parti, il pourrait vous emmener. ” Linu court jusqu'au port.",
        translation: "O guarda pensa um pouco: “Já os barcos podem circular. Um pescador me disse hoje de manhã que ia para En-Vau às nove e meia. Se ele ainda não saiu, poderia levar o senhor.” O Linu corre até o porto.",
        choices: [
          { text: "Linu cherche le pêcheur sur le quai.", translation: "O Linu procura o pescador no cais.", next: 'pecheur' },
          {
            text: "“ Donc le pêcheur est parti hier soir ? ”",
            translation: "“Então o pescador saiu ontem à noite?”",
            wrong: "O guarda contou que o pescador disse HOJE DE MANHÃ que IA para En-Vau às nove e meia. “Il m'a dit qu'il allait…” é o discurso indireto no passado: o presente “je vais” vira “il allait”.",
          },
        ],
      },
      pecheur: {
        emoji: '🎣',
        text: "Le pêcheur, un vieux Marseillais qui s'appelle Fernand, range ses filets. “ Tu as de la chance, petit ! Cinq minutes plus tard, tu m'aurais raté. Allez, monte ! ” Le bateau longe les falaises blanches, et l'eau devient d'un bleu incroyable.",
        translation: "O pescador, um marselhês idoso chamado Fernand, está guardando as redes. “Você tem sorte, garoto! Cinco minutos depois, você teria me perdido. Vamos, sobe!” O barco segue ao longo das falésias brancas, e a água fica de um azul inacreditável.",
        choices: [{ text: "“ Merci, Fernand, vous me sauvez la journée ! ”", translation: "“Obrigado, Fernand, o senhor salvou o meu dia!”", next: 'retrouvailles' }],
      },
      retrouvailles: {
        emoji: '🏖️',
        text: "À En-Vau, Yanis et Clara se baignent. Clara crie : “ Linu ! On pensait que tu étais resté au lit ! ” Linu leur raconte sa matinée : le réveil mal réglé, le bus, le massif fermé, le pêcheur. Yanis n'en revient pas.",
        translation: "Em En-Vau, o Yanis e a Clara estão nadando. A Clara grita: “Linu! A gente achou que você tinha ficado na cama!” O Linu conta a manhã dele: o despertador programado errado, o ônibus, o maciço fechado, o pescador. O Yanis não acredita.",
        choices: [{ text: "“ Si Fernand ne m'avait pas emmené, je ne serais jamais arrivé ! ”", translation: "“Se o Fernand não tivesse me trazido, eu nunca teria chegado!”", next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: "Le soir, les trois amis rentrent avec Fernand, qui les a attendus. Sur le bateau, Yanis dit en riant : “ La prochaine fois, c'est moi qui te réveillerai ! ” Linu répond qu'il aurait préféré dormir moins et nager plus, mais qu'il n'oublierait jamais cette journée.",
        translation: "À noite, os três amigos voltam com o Fernand, que esperou por eles. No barco, o Yanis diz rindo: “Da próxima vez, sou eu que vou te acordar!” O Linu responde que teria preferido dormir menos e nadar mais, mas que nunca ia esquecer aquele dia.",
        ending: { tone: 'bom', title: 'Pelas águas das Calanques', message: "Despertador errado, trilha fechada… e mesmo assim o Linu chegou a En-Vau, de barco de pescador." },
      },
    },
  },

  // ───────────────────────── fr-h26 · B2.1 · Mont-Saint-Michel ─────────────────────────
  {
    id: 'fr-h26',
    level: 'B2.1',
    cefr: 'B2',
    title: "La marée n'attend personne",
    emoji: '🌊',
    summary: "Na travessia a pé da baía do Mont-Saint-Michel, o Linu descobre por que o guia tinha insistido tanto nas regras.",
    cultural_context:
      "A baía do Mont-Saint-Michel tem uma das maiores amplitudes de maré da Europa: a diferença entre a maré alta e a baixa pode passar de 14 metros. Por causa da maré e da areia movediça, a travessia a pé da baía deve ser feita com guia. O monte e a baía são Patrimônio Mundial da UNESCO desde 1979.",
    start: 'start',
    glossary: [
      ["la marée", "a maré"],
      ["la baie", "a baía"],
      ["les sables mouvants", "a areia movediça"],
      ["la traversée", "a travessia"],
      ["il avait prévenu que…", "ele tinha avisado que…"],
      ["je n'aurais pas pu", "eu não teria conseguido"],
      ["Si tu t'étais éloigné…", "Se você tivesse se afastado…"],
      ["l'abbaye", "a abadia"],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: "Linu participe à une traversée de la baie à pied, avec une vingtaine de randonneurs. Avant le départ, le guide, Hervé, avait été très clair : il fallait marcher pieds nus, derrière lui, et ne jamais s'éloigner du groupe. Au loin, le Mont-Saint-Michel brille au soleil.",
        translation: "O Linu participa de uma travessia a pé da baía, com uns vinte trilheiros. Antes da saída, o guia, Hervé, tinha sido muito claro: era preciso andar descalço, atrás dele, e nunca se afastar do grupo. Ao longe, o Mont-Saint-Michel brilha ao sol.",
        choices: [
          { text: "Linu suit le groupe, juste derrière Hervé.", translation: "O Linu segue o grupo, logo atrás do Hervé.", next: 'groupe' },
          { text: "Linu s'écarte pour ramasser un joli coquillage.", translation: "O Linu se afasta para pegar uma concha bonita.", next: 'coquillage' },
          {
            text: "Linu met ses bottes, comme le guide l'avait demandé.",
            translation: "O Linu calça as botas, como o guia tinha pedido.",
            wrong: "O guia tinha pedido que andassem “pieds nus”, DESCALÇOS, sempre atrás dele. O mais-que-perfeito “avait été” mostra que o aviso foi dado ANTES da saída.",
          },
        ],
      },
      coquillage: {
        emoji: '🐚',
        text: "Linu s'éloigne de quelques mètres. Soudain, ses pattes s'enfoncent dans le sable, et il ne peut plus avancer ! Hervé arrive en courant : “ Ne bouge surtout pas ! Si tu t'étais éloigné encore un peu, je n'aurais pas pu t'atteindre. ”",
        translation: "O Linu se afasta alguns metros. De repente, os pés dele afundam na areia, e ele não consegue mais andar! O Hervé chega correndo: “Não se mexa de jeito nenhum! Se você tivesse se afastado mais um pouco, eu não teria conseguido te alcançar.”",
        choices: [
          { text: "Linu reste immobile et attend Hervé.", translation: "O Linu fica imóvel e espera o Hervé.", next: 'sauve' },
          { text: "Linu se débat pour sortir tout seul.", translation: "O Linu se debate para sair sozinho.", next: 'final_sable' },
        ],
      },
      final_sable: {
        emoji: '😰',
        text: "Plus Linu bouge, plus il s'enfonce. Il faut Hervé et deux randonneurs pour le tirer de là. Ils ont perdu tant de temps que le guide décide de faire demi-tour : la marée allait bientôt monter. Linu n'a pas vu le Mont de près.",
        translation: "Quanto mais o Linu se mexe, mais ele afunda. São precisos o Hervé e dois trilheiros para tirá-lo dali. Eles perderam tanto tempo que o guia decide dar meia-volta: a maré ia subir logo. O Linu não viu o Monte de perto.",
        ending: { tone: 'neutro', title: 'Preso na areia', message: "Na areia movediça, o certo é ficar parado e esperar ajuda. O grupo inteiro teve que voltar." },
      },
      sauve: {
        emoji: '🤝',
        text: "Hervé tend son bâton à Linu, qui s'y accroche, et doucement, il sort du sable. “ Je t'avais prévenu, dit Hervé, sans colère. Tout le monde veut ramasser des coquillages, mais la baie ne pardonne pas. ” Linu promet qu'il ne quittera plus le groupe.",
        translation: "O Hervé estende o bastão para o Linu, que se agarra nele, e devagar ele sai da areia. “Eu tinha te avisado”, diz o Hervé, sem raiva. “Todo mundo quer pegar conchas, mas a baía não perdoa.” O Linu promete que não vai mais sair do grupo.",
        choices: [{ text: "Linu reprend sa place derrière Hervé.", translation: "O Linu volta para o seu lugar atrás do Hervé.", next: 'groupe' }],
      },
      groupe: {
        emoji: '👣',
        text: "Le groupe arrive au pied du Mont. Hervé annonce que la marée montera dans trois heures et qu'ils auront deux heures pour visiter l'abbaye. Une dame a demandé si on ne pourrait pas rester plus longtemps ; Hervé a répondu que c'était impossible.",
        translation: "O grupo chega ao pé do Monte. O Hervé anuncia que a maré vai subir dali a três horas e que eles vão ter duas horas para visitar a abadia. Uma senhora perguntou se não daria para ficar mais tempo; o Hervé respondeu que era impossível.",
        choices: [
          { text: "Linu monte à l'abbaye avec le groupe.", translation: "O Linu sobe até a abadia com o grupo.", next: 'abbaye' },
          {
            text: "“ Super, on a donc trois heures pour visiter l'abbaye ! ”",
            translation: "“Ótimo, então temos três horas para visitar a abadia!”",
            wrong: "O Hervé disse que a maré sobe dali a TRÊS horas, mas que eles têm só DUAS horas de visita, para voltar antes da maré. Quando a senhora perguntou se podiam ficar mais, ele respondeu “que c'était impossible”.",
          },
        ],
      },
      abbaye: {
        emoji: '⛪',
        text: "Linu monte les marches jusqu'à l'abbaye. Du haut des remparts, il voit la baie immense, grise et brillante. Il comprend enfin pourquoi Hervé avait tant insisté : on ne voit aucun chemin, seulement du sable et des rivières qui changent de place.",
        translation: "O Linu sobe os degraus até a abadia. Do alto das muralhas, ele vê a baía imensa, cinzenta e brilhante. Ele entende enfim por que o Hervé tinha insistido tanto: não se vê nenhum caminho, só areia e rios que mudam de lugar.",
        choices: [
          { text: "Linu redescend à l'heure prévue.", translation: "O Linu desce na hora combinada.", next: 'final_bom' },
          { text: "Linu reste pour photographier la baie encore un peu.", translation: "O Linu fica mais um pouco para fotografar a baía.", next: 'final_navette' },
        ],
      },
      final_bom: {
        emoji: '🌅',
        text: "À l'heure exacte, Linu retrouve le groupe, et ils retraversent la baie. Le soir, depuis la côte, il regarde la mer qui a recouvert l'endroit où ils avaient marché le matin. Hervé lui dit que, s'il n'avait pas écouté, il aurait passé la nuit au Mont.",
        translation: "Na hora exata, o Linu encontra o grupo, e eles atravessam a baía de volta. À noite, da costa, ele olha o mar que cobriu o lugar por onde eles tinham andado de manhã. O Hervé lhe diz que, se ele não tivesse obedecido, teria passado a noite no Monte.",
        ending: { tone: 'bom', title: 'Mais rápido que a maré', message: "O Linu atravessou a baía, visitou a abadia e voltou antes da maré, seguindo o guia." },
      },
      final_navette: {
        emoji: '🚌',
        text: "Quand Linu redescend, le groupe est déjà reparti : Hervé avait prévenu qu'il n'attendrait personne. Linu rentre par la passerelle, en navette, comme les autres touristes. Depuis la vitre, il voit la marée qui monte sur le sable.",
        translation: "Quando o Linu desce, o grupo já foi embora: o Hervé tinha avisado que não ia esperar ninguém. O Linu volta pela passarela, de ônibus, como os outros turistas. Pela janela, ele vê a maré subindo sobre a areia.",
        ending: { tone: 'neutro', title: 'Volta de ônibus', message: "Belas fotos, mas o Linu perdeu a travessia de volta com o grupo." },
      },
    },
  },

  // ───────────────────────── fr-h27 · B2.1 · Madagascar ─────────────────────────
  {
    id: 'fr-h27',
    level: 'B2.1',
    cefr: 'B2',
    title: "Le chant de l'indri",
    emoji: '🐒',
    summary: "Na floresta de Andasibe, em Madagascar, o Linu precisa acordar cedo para ouvir o canto do indri, o maior dos lêmures.",
    cultural_context:
      "Os lêmures só existem em estado natural em Madagascar. O maior deles, o indri, vive nas florestas úmidas do leste da ilha, como a de Andasibe, e é famoso pelo canto, que se ouve de muito longe. Em Madagascar, o malgaxe e o francês são línguas oficiais.",
    start: 'start',
    glossary: [
      ["le lémurien", "o lêmure"],
      ["l'indri", "o indri, o maior lêmure"],
      ["le caméléon", "o camaleão"],
      ["le lever du soleil", "o nascer do sol"],
      ["il avait expliqué que…", "ele tinha explicado que…"],
      ["Si on était partis plus tard, on ne l'aurait pas vu.", "Se tivéssemos saído mais tarde, não o teríamos visto."],
      ["Misaotra !", "Obrigado! (em malgaxe)"],
    ],
    nodes: {
      start: {
        emoji: '🌳',
        text: "Andasibe, cinq heures du matin. La veille, Linu avait réservé une visite avec Faly, un guide du village. Faly lui avait expliqué que les indris chantaient surtout le matin et qu'il faudrait partir avant le lever du soleil. Mais ce matin, il pleut, et le lit est si chaud…",
        translation: "Andasibe, cinco da manhã. Na véspera, o Linu tinha reservado um passeio com o Faly, um guia da vila. O Faly tinha explicado que os indris cantavam sobretudo de manhã e que seria preciso sair antes do nascer do sol. Mas hoje de manhã está chovendo, e a cama está tão quentinha…",
        choices: [
          { text: "Linu se lève et rejoint Faly.", translation: "O Linu se levanta e vai encontrar o Faly.", next: 'foret' },
          { text: "Linu décide de dormir encore une heure.", translation: "O Linu decide dormir mais uma hora.", next: 'retard' },
          {
            text: "“ Faly a dit que les indris chantaient le soir : j'ai le temps. ”",
            translation: "“O Faly disse que os indris cantavam à noite: tenho tempo.”",
            wrong: "O Faly tinha explicado que os indris cantam sobretudo DE MANHÃ (“le matin”). No discurso indireto no passado, “ils chantent” vira “ils chantaient”, mas o sentido continua: era preciso sair antes do nascer do sol.",
          },
        ],
      },
      foret: {
        emoji: '🦎',
        text: "Sous la pluie fine, Faly avance sans bruit. Il montre à Linu un caméléon vert sur une branche : “ Si on était partis plus tard, on ne l'aurait pas vu : il se cache quand il fait chaud. ” Puis il s'arrête et lève la main : “ Écoute… ”",
        translation: "Debaixo da garoa, o Faly avança sem fazer barulho. Ele mostra ao Linu um camaleão verde num galho: “Se tivéssemos saído mais tarde, não o teríamos visto: ele se esconde quando faz calor.” Depois ele para e levanta a mão: “Escute…”",
        choices: [
          { text: "Linu se tait et écoute.", translation: "O Linu fica quieto e escuta.", next: 'chant' },
          {
            text: "“ Pourquoi est-ce que ce caméléon adore la chaleur ? ”",
            translation: "“Por que esse camaleão adora o calor?”",
            wrong: "O Faly disse o contrário: o camaleão SE ESCONDE quando faz calor (“il se cache quand il fait chaud”). Se tivessem saído mais tarde, não o teriam visto.",
          },
        ],
      },
      chant: {
        emoji: '🎶',
        text: "Un cri immense traverse la forêt, puis un autre lui répond. Au-dessus d'eux, dans un grand arbre, une famille d'indris chante. Faly murmure qu'il avait promis à Linu qu'il les entendrait, et qu'il tenait toujours ses promesses.",
        translation: "Um grito imenso atravessa a floresta, depois outro lhe responde. Acima deles, numa árvore alta, uma família de indris está cantando. O Faly sussurra que tinha prometido ao Linu que ele os ouviria, e que sempre cumpria as promessas.",
        choices: [{ text: "Linu écoute, les yeux fermés.", translation: "O Linu escuta, de olhos fechados.", next: 'final_bom' }],
      },
      retard: {
        emoji: '⌛',
        text: "Quand Linu arrive au point de rendez-vous, Faly n'est plus là. Un enfant lui dit en français : “ Faly m'a demandé de te dire qu'il partait avec d'autres touristes et qu'il reviendrait vers neuf heures. ” Linu se dit que, s'il s'était levé, il serait déjà dans la forêt.",
        translation: "Quando o Linu chega ao ponto de encontro, o Faly não está mais lá. Um menino lhe diz em francês: “O Faly me pediu para te dizer que estava saindo com outros turistas e que voltaria lá pelas nove.” O Linu pensa que, se tivesse se levantado, já estaria na floresta.",
        choices: [
          { text: "Linu entre seul dans la forêt.", translation: "O Linu entra sozinho na floresta.", next: 'seul' },
          { text: "Linu attend Faly au village.", translation: "O Linu espera o Faly na vila.", next: 'final_village' },
        ],
      },
      final_village: {
        emoji: '🍚',
        text: "Linu attend au village. À neuf heures, Faly revient avec des touristes ravis : les indris avaient chanté pendant dix minutes, juste au-dessus d'eux. Linu mange un bol de riz et décide que, demain, il mettra deux réveils.",
        translation: "O Linu espera na vila. Às nove, o Faly volta com turistas encantados: os indris tinham cantado durante dez minutos, bem em cima deles. O Linu come uma tigela de arroz e decide que amanhã vai pôr dois despertadores.",
        ending: { tone: 'neutro', title: 'Canto perdido', message: "O Linu dormiu demais e só ouviu falar do canto dos indris. Amanhã tem outra chance!" },
      },
      seul: {
        emoji: '🌫️',
        text: "Linu s'engage seul sur le sentier. Après vingt minutes, tous les arbres se ressemblent, et il ne sait plus d'où il est venu. Tout à coup, un cri immense traverse la forêt : on dirait une sirène, ou un chant très triste.",
        translation: "O Linu entra sozinho na trilha. Depois de vinte minutos, todas as árvores parecem iguais, e ele já não sabe de onde veio. De repente, um grito imenso atravessa a floresta: parece uma sirene, ou um canto muito triste.",
        choices: [
          { text: "Linu marche vers le chant.", translation: "O Linu caminha na direção do canto.", next: 'rencontre' },
          { text: "Linu, effrayé, court dans l'autre sens.", translation: "O Linu, assustado, corre para o outro lado.", next: 'final_perdu' },
        ],
      },
      final_perdu: {
        emoji: '😰',
        text: "Linu court longtemps entre les arbres et finit par retrouver la route, à deux kilomètres du village. Le soir, Faly lui raconte que les indris avaient chanté tout près de lui. Linu aurait tellement aimé les voir !",
        translation: "O Linu corre muito tempo entre as árvores e acaba encontrando a estrada, a dois quilômetros da vila. À noite, o Faly lhe conta que os indris tinham cantado bem perto dele. O Linu teria gostado tanto de vê-los!",
        ending: { tone: 'neutro', title: 'Fugiu do canto', message: "O Linu se assustou com o canto do indri e fugiu justamente do que tinha vindo ver." },
      },
      rencontre: {
        emoji: '🙌',
        text: "Au bout du sentier, Linu trouve Faly et deux touristes sous un grand arbre, où une famille d'indris chante. Faly fronce les sourcils : “ Tu es venu seul ? Si tu t'étais perdu, personne ne t'aurait trouvé ! ” Mais il sourit et lui fait signe de s'asseoir.",
        translation: "No fim da trilha, o Linu encontra o Faly e dois turistas debaixo de uma árvore alta, onde uma família de indris está cantando. O Faly franze a testa: “Você veio sozinho? Se tivesse se perdido, ninguém teria te encontrado!” Mas ele sorri e faz sinal para ele se sentar.",
        choices: [{ text: "Linu s'assoit sans bruit et écoute.", translation: "O Linu se senta sem fazer barulho e escuta.", next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: "Les indris chantent pendant plusieurs minutes, puis disparaissent dans les arbres. Sur le chemin du retour, Linu dit à Faly qu'il n'avait jamais rien entendu de pareil. “ Misaotra ! ” ajoute-t-il, “ merci ” en malgache, et Faly rit de son accent.",
        translation: "Os indris cantam durante vários minutos e depois desaparecem nas árvores. No caminho de volta, o Linu diz ao Faly que nunca tinha ouvido nada parecido. “Misaotra!”, acrescenta, “obrigado” em malgaxe, e o Faly ri do sotaque dele.",
        ending: { tone: 'bom', title: 'O canto da floresta', message: "O Linu ouviu o canto dos indris na floresta de Andasibe e agradeceu em malgaxe." },
      },
    },
  },

  // ───────────────────────── fr-h28 · B2.2 · Paris ─────────────────────────
  {
    id: 'fr-h28',
    level: 'B2.2',
    cefr: 'B2',
    title: "Le bureau des objets trouvés",
    emoji: '🗂️',
    summary: "Em Paris, o Linu perde o passaporte no metrô e enfrenta a burocracia francesa: guichê, formulário e carta formal.",
    cultural_context:
      "O serviço de achados e perdidos de Paris, ligado à Prefeitura de Polícia, existe desde o início do século XIX e recebe todos os anos milhares de objetos esquecidos na cidade, no metrô e nos ônibus. Na França, as cartas à administração seguem fórmulas fixas de abertura e de despedida.",
    start: 'start',
    glossary: [
      ["le bureau des objets trouvés", "a seção de achados e perdidos"],
      ["la déclaration de perte", "a declaração de perda"],
      ["porter plainte", "prestar queixa (em caso de roubo)"],
      ["le guichet", "o guichê"],
      ["une pièce d'identité", "um documento de identidade"],
      ["a été rapporté par…", "foi entregue por… (voz passiva)"],
      ["Veuillez…", "Queira…, Por favor… (formal)"],
      ["Je vous prie d'agréer l'expression de mes salutations distinguées.", "Atenciosamente. (fecho formal de carta)"],
    ],
    nodes: {
      start: {
        emoji: '🚇',
        text: "Paris, un lundi matin. En sortant du métro, Linu s'aperçoit que son passeport a disparu. A-t-il été volé, ou est-il simplement tombé ? Il se souvient seulement que personne ne s'est approché de lui. Un agent de la station lui conseille de se rendre au bureau des objets trouvés.",
        translation: "Paris, uma segunda de manhã. Ao sair do metrô, o Linu percebe que o passaporte sumiu. Será que foi roubado, ou simplesmente caiu? Ele só se lembra de que ninguém chegou perto dele. Um funcionário da estação o aconselha a ir à seção de achados e perdidos.",
        choices: [
          { text: "Linu se rend directement au bureau des objets trouvés.", translation: "O Linu vai direto à seção de achados e perdidos.", next: 'guichet' },
          { text: "Linu passe d'abord au commissariat.", translation: "O Linu passa antes na delegacia.", next: 'commissariat' },
        ],
      },
      commissariat: {
        emoji: '👮',
        text: "Au commissariat, un policier l'écoute poliment. “ En cas de vol, une plainte doit être déposée. En cas de perte, une simple déclaration suffit. Mais avant tout, je vous conseille de passer aux objets trouvés : de nombreux documents y sont rapportés chaque jour. ”",
        translation: "Na delegacia, um policial o escuta com educação. “Em caso de roubo, é preciso prestar queixa. Em caso de perda, basta uma simples declaração. Mas antes de tudo, aconselho o senhor a passar nos achados e perdidos: muitos documentos são entregues lá todos os dias.”",
        choices: [
          { text: "“ Je vais d'abord vérifier aux objets trouvés, merci. ”", translation: "“Vou primeiro verificar nos achados e perdidos, obrigado.”", next: 'guichet' },
          {
            text: "“ Je souhaiterais donc porter plainte pour vol. ”",
            translation: "“Então eu gostaria de prestar queixa por roubo.”",
            wrong: "O Linu lembra que ninguém chegou perto dele: parece PERDA, não roubo. A queixa (“plainte”) é para roubo; para perda, basta uma “déclaration”, e o policial aconselhou passar antes nos achados e perdidos.",
          },
        ],
      },
      guichet: {
        emoji: '🎫',
        text: "Au bureau des objets trouvés, Linu prend un ticket et attend. Quand son numéro est appelé, une employée lui tend un formulaire : “ Veuillez remplir ce document et présenter une pièce d'identité. ” Linu explique que sa seule pièce d'identité est justement le passeport qu'il a perdu.",
        translation: "Na seção de achados e perdidos, o Linu pega uma senha e espera. Quando o número dele é chamado, uma funcionária lhe entrega um formulário: “Queira preencher este documento e apresentar um documento de identidade.” O Linu explica que o único documento de identidade dele é justamente o passaporte que perdeu.",
        choices: [
          { text: "“ Un autre document serait-il accepté ? J'ai ma carte d'étudiant. ”", translation: "“Seria aceito outro documento? Tenho minha carteira de estudante.”", next: 'formulaire' },
          { text: "“ Alors c'est impossible ! ” Linu s'en va, furieux.", translation: "“Então é impossível!” O Linu vai embora, furioso.", next: 'final_colere' },
        ],
      },
      final_colere: {
        emoji: '🚪',
        text: "Linu sort en claquant la porte. Mais sans pièce d'identité, il ne peut ni changer d'hôtel ni prendre le train. Le lendemain, il doit revenir au même guichet… et reprendre un ticket.",
        translation: "O Linu sai batendo a porta. Mas sem documento de identidade, ele não pode nem trocar de hotel nem pegar o trem. No dia seguinte, tem que voltar ao mesmo guichê… e pegar outra senha.",
        ending: { tone: 'neutro', title: 'Porta batida', message: "Paciência também faz parte da burocracia: o Linu perdeu um dia inteiro." },
      },
      formulaire: {
        emoji: '📋',
        text: "L'employée consulte son ordinateur. “ Un passeport brésilien a été rapporté ce matin par un conducteur de la ligne 6. Il ne pourra être remis à son propriétaire qu'après vérification. Votre carte d'étudiant suffira ; toutefois, votre demande doit être faite par écrit. ”",
        translation: "A funcionária consulta o computador. “Um passaporte brasileiro foi entregue hoje de manhã por um condutor da linha 6. Ele só poderá ser devolvido ao dono depois de verificação. A sua carteira de estudante será suficiente; porém, o seu pedido deve ser feito por escrito.”",
        choices: [
          { text: "Linu remplit le formulaire et rédige une courte lettre.", translation: "O Linu preenche o formulário e redige uma carta curta.", next: 'lettre' },
          {
            text: "“ Donc je dois revenir quand j'aurai retrouvé mon passeport ? ”",
            translation: "“Então tenho que voltar quando tiver encontrado o meu passaporte?”",
            wrong: "A funcionária disse que um passaporte brasileiro FOI ENTREGUE hoje de manhã por um condutor (“a été rapporté… par”): é voz passiva. O passaporte provavelmente já está ali, e a carteira de estudante basta.",
          },
        ],
      },
      lettre: {
        emoji: '✍️',
        text: "Linu hésite : comment écrit-on une lettre formelle en français ? L'employée l'aide un peu. Il écrit : “ Madame, Monsieur, j'ai l'honneur de solliciter la restitution de mon passeport, perdu ce matin sur la ligne 6 du métro. ” Il manque maintenant une formule de politesse pour terminer.",
        translation: "O Linu hesita: como se escreve uma carta formal em francês? A funcionária o ajuda um pouco. Ele escreve: “Prezados senhores, venho respeitosamente solicitar a devolução do meu passaporte, perdido hoje de manhã na linha 6 do metrô.” Agora falta uma fórmula de cortesia para terminar.",
        choices: [
          { text: "“ Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées. ”", translation: "“Atenciosamente.”", next: 'remise' },
          {
            text: "“ Bisous, et à bientôt ! ”",
            translation: "“Beijos, e até logo!”",
            wrong: "“Bisous” (beijos) é para amigos e família! Numa carta à administração, termina-se com uma fórmula formal, como “Je vous prie d'agréer… l'expression de mes salutations distinguées”.",
          },
        ],
      },
      remise: {
        emoji: '🛂',
        text: "Vingt minutes plus tard, le passeport est apporté au guichet par un agent. L'employée compare la photo avec le visage de Linu, puis lui tend le document : “ Voici votre passeport. Veuillez signer ici, s'il vous plaît. ”",
        translation: "Vinte minutos depois, o passaporte é trazido ao guichê por um funcionário. A funcionária compara a foto com o rosto do Linu e depois lhe entrega o documento: “Aqui está o seu passaporte. Queira assinar aqui, por favor.”",
        choices: [{ text: "Linu signe, soulagé.", translation: "O Linu assina, aliviado.", next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: "Avant de partir, Linu écrit un mot de remerciement pour le conducteur de la ligne 6, qui lui sera transmis par le bureau. Cette fois, il le termine par : “ Avec toute ma reconnaissance. ” Finalement, l'administration française n'est pas si terrible !",
        translation: "Antes de ir embora, o Linu escreve um bilhete de agradecimento para o condutor da linha 6, que vai ser entregue a ele pela seção. Desta vez, ele termina com: “Com toda a minha gratidão.” No fim das contas, a administração francesa não é tão terrível!",
        ending: { tone: 'bom', title: 'Salvo pela burocracia', message: "Com paciência, um formulário e uma carta bem educada, o Linu recuperou o passaporte." },
      },
    },
  },

  // ───────────────────────── fr-h29 · B2.2 · Estrasburgo ─────────────────────────
  {
    id: 'fr-h29',
    level: 'B2.2',
    cefr: 'B2',
    title: "Une place à la tribune",
    emoji: '🏛️',
    summary: "Em Estrasburgo, o Linu escreve um e-mail formal para assistir a uma sessão do Parlamento Europeu, mas quase põe tudo a perder.",
    cultural_context:
      "Estrasburgo, na Alsácia, é a sede oficial do Parlamento Europeu, onde acontece a maior parte das sessões plenárias; os debates são interpretados ao vivo nas 24 línguas oficiais da União Europeia. O centro histórico da cidade, a Grande-Île, é Patrimônio Mundial da UNESCO desde 1988.",
    start: 'start',
    glossary: [
      ["la séance plénière", "a sessão plenária"],
      ["le courriel", "o e-mail (termo oficial na França e no Quebec)"],
      ["Madame, Monsieur,", "Prezados senhores, (abertura formal)"],
      ["Vous êtes prié de…", "O senhor deve… / Pede-se ao senhor que… (formal)"],
      ["être attribué", "ser atribuído (voz passiva)"],
      ["muni de", "portando, munido de"],
      ["la tribune", "a galeria do público"],
      ["la tarte flambée", "massa fina alsaciana com creme, cebola e toucinho"],
    ],
    nodes: {
      start: {
        emoji: '💻',
        text: "Linu passe deux semaines à Strasbourg. Il aimerait assister à un débat au Parlement européen pendant la session plénière. Sur le site officiel, il est précisé que les demandes doivent être envoyées par courriel au moins une semaine à l'avance. Linu commence à écrire.",
        translation: "O Linu vai passar duas semanas em Estrasburgo. Ele gostaria de assistir a um debate no Parlamento Europeu durante a sessão plenária. No site oficial, está indicado que os pedidos devem ser enviados por e-mail com pelo menos uma semana de antecedência. O Linu começa a escrever.",
        choices: [
          { text: "“ Madame, Monsieur, je souhaiterais assister à une séance plénière la semaine prochaine. ”", translation: "“Prezados senhores, eu gostaria de assistir a uma sessão plenária na semana que vem.”", next: 'reponse' },
          {
            text: "“ Salut ! Je peux passer mardi ? Merci ! ”",
            translation: "“Oi! Posso dar uma passada na terça? Valeu!”",
            wrong: "Para uma instituição, o e-mail deve ser formal: “Madame, Monsieur,” na abertura, “je souhaiterais” em vez de “je peux”, e uma fórmula de cortesia no fim. “Salut” é só para amigos!",
          },
        ],
      },
      reponse: {
        emoji: '📧',
        text: "Deux jours plus tard, Linu reçoit une réponse : “ Votre demande a bien été reçue. Une place vous a été attribuée pour la séance du mardi après-midi. Vous êtes prié de vous présenter à l'accueil des visiteurs trente minutes à l'avance, muni d'une pièce d'identité en cours de validité. ”",
        translation: "Dois dias depois, o Linu recebe uma resposta: “Seu pedido foi recebido. Um lugar lhe foi atribuído para a sessão de terça à tarde. Pede-se que o senhor se apresente à recepção de visitantes com trinta minutos de antecedência, portando um documento de identidade válido.”",
        choices: [
          { text: "Linu note tout dans son carnet : mardi, trente minutes avant, pièce d'identité.", translation: "O Linu anota tudo no caderno: terça, trinta minutos antes, documento de identidade.", next: 'mardi' },
          {
            text: "“ Il faut encore attendre pour savoir si j'ai une place ? ”",
            translation: "“Ainda tenho que esperar para saber se tenho um lugar?”",
            wrong: "O e-mail diz que um lugar JÁ FOI atribuído (“une place vous a été attribuée”): é voz passiva no passé composé. Ele só precisa chegar meia hora antes com um documento.",
          },
        ],
      },
      mardi: {
        emoji: '🛂',
        text: "Le mardi, Linu arrive au Parlement, un grand bâtiment de verre au bord de l'eau. À l'accueil, un agent de sécurité lui demande sa pièce d'identité. Linu fouille son sac… Son passeport est resté à l'hôtel, sur la table de nuit !",
        translation: "Na terça, o Linu chega ao Parlamento, um grande prédio de vidro à beira d'água. Na recepção, um segurança pede o documento de identidade dele. O Linu revira a mochila… O passaporte ficou no hotel, na mesinha de cabeceira!",
        choices: [
          { text: "Linu court à l'hôtel chercher son passeport.", translation: "O Linu corre ao hotel buscar o passaporte.", next: 'tram' },
          { text: "Linu montre une photo de son passeport sur son téléphone.", translation: "O Linu mostra uma foto do passaporte no celular.", next: 'photo' },
        ],
      },
      photo: {
        emoji: '📱',
        text: "L'agent secoue la tête poliment : “ Je suis désolé, monsieur, mais seuls les documents originaux sont acceptés. Il s'agit d'une règle de sécurité qui ne peut pas être modifiée. ” Il reste quarante minutes avant le début de la séance.",
        translation: "O segurança balança a cabeça, educado: “Sinto muito, senhor, mas só são aceitos documentos originais. Trata-se de uma regra de segurança que não pode ser alterada.” Faltam quarenta minutos para o início da sessão.",
        choices: [
          { text: "Linu court à l'hôtel chercher son passeport.", translation: "O Linu corre ao hotel buscar o passaporte.", next: 'tram' },
          { text: "Linu renonce et va visiter la cathédrale.", translation: "O Linu desiste e vai visitar a catedral.", next: 'final_cathedrale' },
        ],
      },
      final_cathedrale: {
        emoji: '⛪',
        text: "Linu visite la cathédrale de Strasbourg et admire l'horloge astronomique. C'est magnifique, mais il pense au débat qu'il a manqué. Il se promet que, la prochaine fois, son passeport sera rangé dans son sac dès la veille.",
        translation: "O Linu visita a catedral de Estrasburgo e admira o relógio astronômico. É lindo, mas ele pensa no debate que perdeu. Ele promete a si mesmo que, da próxima vez, o passaporte vai estar guardado na mochila desde a véspera.",
        ending: { tone: 'neutro', title: 'Sem passaporte, sem plenária', message: "A catedral é linda, mas o lugar reservado no Parlamento ficou vazio." },
      },
      tram: {
        emoji: '🚋',
        text: "Linu prend le tram, récupère son passeport et revient au Parlement en courant. L'agent vérifie le document : “ Tout est en ordre. Votre badge vous est remis, et vous serez accompagné jusqu'à la tribune. Veuillez éteindre votre téléphone pendant la séance. ”",
        translation: "O Linu pega o bonde, busca o passaporte e volta correndo ao Parlamento. O segurança confere o documento: “Está tudo em ordem. Aqui está o seu crachá, e o senhor será acompanhado até a galeria. Queira desligar o celular durante a sessão.”",
        choices: [{ text: "“ Je vous remercie infiniment, monsieur. ”", translation: "“Muitíssimo obrigado, senhor.”", next: 'tribune' }],
      },
      tribune: {
        emoji: '🎧',
        text: "Depuis la tribune, Linu regarde l'hémicycle immense. Les députés s'expriment dans leurs langues, et chaque intervention est interprétée en direct. Linu met un casque et choisit le français : il comprend presque tout !",
        translation: "Da galeria, o Linu olha o imenso plenário em semicírculo. Os deputados falam nas suas línguas, e cada discurso é interpretado ao vivo. O Linu põe um fone de ouvido e escolhe o francês: ele entende quase tudo!",
        choices: [{ text: "Linu écoute le débat jusqu'au bout.", translation: "O Linu escuta o debate até o fim.", next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: "Le soir, dans une winstub près de la cathédrale, Linu mange une tarte flambée. Il écrit un courriel à ses amis, sans aucune formule de politesse cette fois : “ Aujourd'hui, j'ai entendu l'Europe parler en vingt-quatre langues ! ”",
        translation: "À noite, numa winstub (taverna alsaciana) perto da catedral, o Linu come uma tarte flambée. Ele escreve um e-mail aos amigos, desta vez sem nenhuma fórmula de cortesia: “Hoje ouvi a Europa falar em vinte e quatro línguas!”",
        ending: { tone: 'bom', title: 'Europa em 24 línguas', message: "Com um e-mail bem formal e uma corrida de bonde, o Linu assistiu a um debate no Parlamento Europeu." },
      },
    },
  },

  // ───────────────────────── fr-h30 · B2.2 · Luxemburgo ─────────────────────────
  {
    id: 'fr-h30',
    level: 'B2.2',
    cefr: 'B2',
    title: "Un stage au Luxembourg",
    emoji: '💼',
    summary: "No Luxemburgo, o Linu se candidata a um estágio num museu e descobre um país onde três línguas convivem todos os dias.",
    cultural_context:
      "O Luxemburgo tem três línguas administrativas: o luxemburguês, o francês e o alemão; as leis são redigidas em francês. Desde 2020, o transporte público é gratuito em todo o país.",
    start: 'start',
    glossary: [
      ["le stage", "o estágio"],
      ["la candidature", "a candidatura"],
      ["la lettre de motivation", "a carta de apresentação"],
      ["l'entretien", "a entrevista (de emprego)"],
      ["être retenu", "ser selecionado (voz passiva)"],
      ["être convoqué", "ser convocado"],
      ["Moien !", "Oi! (em luxemburguês)"],
      ["Je vous prie de bien vouloir excuser…", "Peço que queira desculpar… (formal)"],
    ],
    nodes: {
      start: {
        emoji: '📄',
        text: "Linu voudrait faire un stage dans un musée à Luxembourg. Selon l'annonce, les candidatures, accompagnées d'un CV et d'une lettre de motivation, doivent être adressées à Mme Weber, responsable des ressources humaines. Linu relit sa lettre avant de l'envoyer. Elle se termine par : “ Merci, à plus ! ”",
        translation: "O Linu gostaria de fazer um estágio num museu na cidade de Luxemburgo. Segundo o anúncio, as candidaturas, acompanhadas de um currículo e de uma carta de apresentação, devem ser enviadas à Sra. Weber, responsável pelos recursos humanos. O Linu relê a carta antes de mandar. Ela termina com: “Valeu, até mais!”",
        choices: [
          { text: "Linu remplace la fin par une formule de politesse.", translation: "O Linu troca o final por uma fórmula de cortesia.", next: 'formule' },
          {
            text: "Linu envoie la lettre telle quelle : c'est plus sympathique.",
            translation: "O Linu manda a carta assim mesmo: é mais simpático.",
            wrong: "Uma carta de candidatura é formal: não se termina com “à plus” (até mais). Use uma fórmula como “Je vous prie d'agréer, Madame, l'expression de mes salutations distinguées”.",
          },
        ],
      },
      formule: {
        emoji: '✉️',
        text: "Linu écrit : “ Dans l'attente de votre réponse, je vous prie d'agréer, Madame, l'expression de mes salutations distinguées. ” Une semaine plus tard, il reçoit un courriel : “ Nous avons le plaisir de vous informer que votre candidature a été retenue. Vous êtes convoqué à un entretien lundi prochain à dix heures. ”",
        translation: "O Linu escreve: “No aguardo de sua resposta, subscrevo-me atenciosamente.” Uma semana depois, ele recebe um e-mail: “Temos o prazer de informar que a sua candidatura foi selecionada. O senhor está convocado para uma entrevista na próxima segunda-feira, às dez horas.”",
        choices: [
          { text: "Linu répond qu'il sera présent.", translation: "O Linu responde que vai estar presente.", next: 'voyage' },
          {
            text: "“ Ma candidature a été refusée… Tant pis. ”",
            translation: "“Minha candidatura foi recusada… Paciência.”",
            wrong: "“Votre candidature a été retenue” quer dizer que ela foi SELECIONADA, e ele foi convocado (“convoqué”) para uma entrevista. Boa notícia!",
          },
        ],
      },
      voyage: {
        emoji: '🚆',
        text: "Le lundi, Linu prend le train, puis le tram jusqu'au musée. Il cherche son portefeuille pour acheter un billet, mais une dame lui sourit : “ Ici, les transports publics sont gratuits, vous n'avez pas besoin de billet ! ” Linu arrive donc avec quarante minutes d'avance.",
        translation: "Na segunda, o Linu pega o trem e depois o bonde até o museu. Ele procura a carteira para comprar uma passagem, mas uma senhora sorri para ele: “Aqui o transporte público é gratuito, o senhor não precisa de passagem!” Assim, o Linu chega com quarenta minutos de antecedência.",
        choices: [
          { text: "Linu attend tranquillement à l'accueil.", translation: "O Linu espera tranquilamente na recepção.", next: 'entretien' },
          { text: "Linu va prendre un café en face.", translation: "O Linu vai tomar um café em frente.", next: 'cafe' },
        ],
      },
      cafe: {
        emoji: '☕',
        text: "Au café, Linu entend des clients parler luxembourgeois, puis passer au français, puis à l'allemand, sans même s'en rendre compte. Il est fasciné et oublie l'heure. Quand il regarde sa montre, il est dix heures cinq !",
        translation: "No café, o Linu ouve clientes falando luxemburguês, depois passando para o francês, depois para o alemão, sem nem perceber. Ele fica fascinado e esquece a hora. Quando olha o relógio, são dez e cinco!",
        choices: [
          { text: "Linu court au musée pour présenter ses excuses.", translation: "O Linu corre ao museu para pedir desculpas.", next: 'excuses' },
          { text: "Linu se dit qu'il est trop tard et reste au café.", translation: "O Linu acha que é tarde demais e fica no café.", next: 'final_rate' },
        ],
      },
      final_rate: {
        emoji: '😔',
        text: "Linu reste au café. Le soir, il reçoit un courriel poli : “ Nous regrettons de ne pas avoir pu vous rencontrer et vous souhaitons une bonne continuation. ” Il comprend que, dans le monde professionnel, l'heure, c'est l'heure.",
        translation: "O Linu fica no café. À noite, ele recebe um e-mail educado: “Lamentamos não ter podido conhecê-lo e desejamos sucesso em sua trajetória.” Ele entende que, no mundo profissional, hora marcada é hora marcada.",
        ending: { tone: 'neutro', title: 'Café demais', message: "Três línguas fascinantes, mas a entrevista ficou para trás." },
      },
      excuses: {
        emoji: '🙇',
        text: "Linu arrive essoufflé : “ Madame, je vous prie de bien vouloir excuser mon retard. ” Mme Weber le regarde un moment, puis sourit : “ Vos excuses sont acceptées, pour cette fois. Asseyez-vous. ”",
        translation: "O Linu chega sem fôlego: “Senhora, peço que queira desculpar o meu atraso.” A Sra. Weber olha para ele por um momento e depois sorri: “Suas desculpas estão aceitas, desta vez. Sente-se.”",
        choices: [{ text: "“ Je vous remercie, madame. ”", translation: "“Agradeço, senhora.”", next: 'entretien' }],
      },
      entretien: {
        emoji: '🗣️',
        text: "Mme Weber commence par un “ Moien ! ”, et Linu lui répond “ Moien ! ” à son tour. Puis la conversation passe au français : “ Au musée, les visites sont proposées en plusieurs langues, et nos panneaux sont rédigés par l'équipe et par les stagiaires. Seriez-vous capable de rédiger des textes en français et en portugais ? ”",
        translation: "A Sra. Weber começa com um “Moien!”, e o Linu responde “Moien!” também. Depois a conversa passa para o francês: “No museu, as visitas são oferecidas em várias línguas, e os nossos painéis são redigidos pela equipe e pelos estagiários. O senhor seria capaz de redigir textos em francês e em português?”",
        choices: [{ text: "“ Oui, madame. Le portugais est ma langue maternelle, et j'écris en français depuis trois ans. ”", translation: "“Sim, senhora. O português é a minha língua materna, e escrevo em francês há três anos.”", next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: "Deux jours plus tard, Linu reçoit un courriel : “ Nous avons le plaisir de vous annoncer que votre candidature a été acceptée. Votre stage débutera le 1er septembre. ” Linu répond aussitôt, sans oublier la formule de politesse.",
        translation: "Dois dias depois, o Linu recebe um e-mail: “Temos o prazer de anunciar que a sua candidatura foi aceita. O seu estágio começará em 1º de setembro.” O Linu responde na hora, sem esquecer a fórmula de cortesia.",
        ending: { tone: 'bom', title: 'Estagiário trilíngue', message: "Carta formal, entrevista em francês e um “Moien!” na hora certa: o Linu conseguiu o estágio." },
      },
    },
  },
  // ───────────────────────── B2.3 ─────────────────────────
  {
    id: "fr-h31",
    level: "B2.3",
    cefr: "B2",
    title: "Embrasser Fanny",
    emoji: "🎯",
    summary: "Numa pracinha do bairro do Panier, em Marselha, o Linu completa um time de petanca e precisa entender a gíria dos jogadores para não perder de 13 a 0.",
    cultural_context:
      "A petanca nasceu em 1907 em La Ciotat, perto de Marselha: um jogador com reumatismo não conseguia mais correr antes de lançar, e passou-se a jogar com os “pieds tanqués” (pés juntos e parados, em provençal). Quem perde de 13 a 0 “embrasse Fanny”: pela tradição, beija o traseiro de uma Fanny de brincadeira, em quadro ou estatueta, pendurada nos bares.",
    start: "start",
    glossary: [
      ["pointer / tirer", "colocar a bocha perto do bolim / atirar para tirar a bocha do adversário"],
      ["le cochonnet", "o bolim, a bolinha-alvo"],
      ["avoir la flemme", "estar com preguiça"],
      ["t'inquiète", "fica tranquilo (na fala, sem “ne” e sem “pas”: ne t'inquiète pas)"],
      ["un ouf", "um doido, um fenômeno (verlan de “fou”)"],
      ["c'est chaud / c'est plié", "a coisa está difícil / está no papo"],
      ["fada", "doido (em Marselha, do provençal)"],
      ["peuchère", "coitado!, puxa! (interjeição do Sul)"],
    ],
    nodes: {
      start: {
        emoji: "☀️",
        text: "Dimanche matin, dans le quartier du Panier, à deux pas du Vieux-Port. Sur une petite place ombragée, trois joueurs de pétanque discutent autour d'un banc. Le plus jeune, Karim, aperçoit Linu et lui fait signe : “ Eh, le pingouin ! T'as déjà joué à la pétanque ? On est que trois, il nous manque un joueur. ”",
        translation:
          "Domingo de manhã, no bairro do Panier, a dois passos do Porto Velho. Numa pracinha sombreada, três jogadores de petanca conversam em volta de um banco. O mais novo, o Karim, vê o Linu e acena: “Ei, pinguim! Já jogou petanca? A gente só tem três, falta um jogador.”",
        choices: [
          { text: "“ Carrément ! Vous m'expliquez les règles ? ”", translation: "“Com certeza! Vocês me explicam as regras?”", next: "regles" },
          { text: "“ Bof, j'ai un peu la flemme, il fait trop chaud… ”", translation: "“Ah, estou com uma preguiça, está quente demais…”", next: "final_flemme" },
          {
            text: "“ Ah, vous êtes déjà quatre ? Bon, je vais juste regarder. ”",
            translation: "“Ah, vocês já são quatro? Bom, vou só assistir.”",
            wrong: "O Karim disse “On est que trois, il nous manque un joueur”: são só três e falta um jogador. Na fala, o “ne” some: “on (n')est que trois” = “só somos três”.",
          },
        ],
      },
      regles: {
        emoji: "👴",
        text: "Le grand-père de Karim, que tout le monde appelle Momo, prend Linu par l'aile. “ Écoute bien, petit. Pointer, c'est lancer ta boule le plus près possible du cochonnet ; tirer, c'est dégommer la boule de l'adversaire. Et si on perd treize à zéro, on embrasse Fanny, c'est la tradition. ” Karim éclate de rire : “ T'inquiète, ça arrive jamais… enfin, presque jamais. ”",
        translation:
          "O avô do Karim, que todo mundo chama de Momo, pega o Linu pela asa. “Escuta bem, pequeno. ‘Pointer’ é jogar a sua bocha o mais perto possível do bolim; ‘tirer’ é derrubar a bocha do adversário. E se a gente perder de treze a zero, beija a Fanny, é a tradição.” O Karim cai na risada: “Fica tranquilo, isso nunca acontece… bom, quase nunca.”",
        choices: [
          { text: "“ Je vais pointer, c'est moins risqué. ”", translation: "“Vou colocar perto do bolim, é menos arriscado.”", next: "pointer" },
          { text: "“ Je vais tirer, ça a l'air plus marrant ! ”", translation: "“Vou atirar, parece mais divertido!”", next: "tirer" },
        ],
      },
      tirer: {
        emoji: "💥",
        text: "Linu prend son élan et lance la boule de toutes ses forces. Elle passe à un mètre du cochonnet, rebondit sur les pavés et termine sa course sous une table de la terrasse d'en face. La patronne du café se lève d'un bond : “ Oh, fada ! Tu veux me casser mes verres ou quoi ? ” Karim se prend la tête entre les mains : “ Peuchère… T'as fait un carreau, mais sur la terrasse ! ”",
        translation:
          "O Linu toma impulso e lança a bocha com toda a força. Ela passa a um metro do bolim, quica nos paralelepípedos e termina o percurso debaixo de uma mesa do café em frente. A dona do café se levanta num pulo: “Ô, doido! Quer quebrar os meus copos, é?” O Karim põe as mãos na cabeça: “Coitado… Você acertou em cheio, mas foi no café!”",
        choices: [
          { text: "S'excuser et aller chercher la boule en souriant.", translation: "Pedir desculpas e ir buscar a bocha sorrindo.", next: "excuses" },
          { text: "Mourir de honte et rentrer à l'hôtel.", translation: "Morrer de vergonha e voltar para o hotel.", next: "final_honte" },
        ],
      },
      excuses: {
        emoji: "😅",
        text: "Linu s'excuse platement auprès de la patronne, qui finit par sourire : “ Allez, c'est pas grave, mon beau, ça arrive même aux champions. ” Elle lui rend la boule et lui conseille de laisser le tir aux spécialistes. Momo hoche la tête : “ Elle a raison. Toi, tu pointes, et on verra bien. ” Linu retourne sur le terrain, un peu vexé, mais bien décidé à se rattraper.",
        translation:
          "O Linu pede mil desculpas à dona do café, que acaba sorrindo: “Vai, não foi nada, meu lindo, isso acontece até com os campeões.” Ela devolve a bocha e aconselha que ele deixe os arremessos para os especialistas. O Momo concorda com a cabeça: “Ela tem razão. Você coloca perto do bolim, e vamos ver.” O Linu volta para o campo, meio sem graça, mas decidido a se recuperar.",
        choices: [{ text: "Pointer, cette fois.", translation: "Colocar perto do bolim, desta vez.", next: "pointer" }],
      },
      pointer: {
        emoji: "🎯",
        text: "Linu se concentre, plie les genoux et lance doucement. La boule roule, roule… et s'arrête à un poil du cochonnet. Les deux papis de l'équipe adverse ronchonnent : “ Il a une sacrée veine, le pingouin ! ” Karim lui tape dans l'aile : “ Trop fort ! T'es un ouf, toi ! ”",
        translation:
          "O Linu se concentra, dobra os joelhos e lança devagar. A bocha rola, rola… e para a um fio do bolim. Os dois vovôs do time adversário resmungam: “Que sorte danada tem esse pinguim!” O Karim bate na asa dele: “Demais! Você é fera!”",
        choices: [{ text: "Continuer la partie.", translation: "Continuar a partida.", next: "decisif" }],
      },
      decisif: {
        emoji: "😬",
        text: "Une heure plus tard, le score est de douze partout, et c'est à Linu de jouer la dernière boule. En face, le plus vieux des papis vient de placer la sienne juste devant le cochonnet. Momo s'approche et lui glisse à l'oreille : “ Là, c'est chaud. Mais faut pas te prendre la tête : tu pointes tranquille, à droite de sa boule, et c'est plié. ” Toute la place retient son souffle, même la patronne du café.",
        translation:
          "Uma hora depois, o placar está doze a doze, e é a vez do Linu jogar a última bocha. Do outro lado, o vovô mais velho acabou de pôr a dele bem na frente do bolim. O Momo se aproxima e cochicha no ouvido dele: “Agora a coisa está difícil. Mas não precisa esquentar a cabeça: você coloca com calma, à direita da bocha dele, e está no papo.” A praça inteira prende a respiração, até a dona do café.",
        choices: [
          { text: "Pointer doucement, à droite de la boule adverse.", translation: "Colocar devagar, à direita da bocha adversária.", next: "final_bom" },
          {
            text: "Tirer de toutes ses forces, comme Momo le lui a demandé.",
            translation: "Atirar com toda a força, como o Momo pediu.",
            wrong: "O Momo pediu o contrário: “tu pointes tranquille, à droite de sa boule” (você coloca com calma, à direita da bocha dele). “Faut pas te prendre la tête” = não precisa esquentar a cabeça; “c'est plié” = está no papo.",
          },
        ],
      },
      final_bom: {
        emoji: "🏆",
        text: "La boule de Linu contourne celle du papi et vient se coller contre le cochonnet. Treize à douze : l'équipe de Karim a gagné ! Les adversaires, beaux joueurs, offrent une tournée de menthes à l'eau à la terrasse. Momo lève son verre : “ À partir d'aujourd'hui, t'es des nôtres, le pingouin. ”",
        translation:
          "A bocha do Linu contorna a do vovô e cola no bolim. Treze a doze: o time do Karim ganhou! Os adversários, bons perdedores, pagam uma rodada de xarope de hortelã com água no café. O Momo levanta o copo: “A partir de hoje, você é dos nossos, pinguim.”",
        ending: { tone: "bom", title: "Marselhês honorário", message: "Você entendeu a gíria da petanca, seguiu o conselho do Momo e ganhou a partida no último lance." },
      },
      final_honte: {
        emoji: "🙈",
        text: "Linu rend la boule sans un mot et s'éclipse, rouge de honte. De loin, il entend Karim crier : “ Reviens, c'était pour rigoler ! ” Mais il est déjà dans la montée qui mène à la Vieille Charité. Le soir, en mangeant une pizza sur le port, il se dit qu'il aurait peut-être dû rester.",
        translation:
          "O Linu devolve a bocha sem uma palavra e sai de fininho, vermelho de vergonha. De longe, ouve o Karim gritar: “Volta, era brincadeira!” Mas ele já está na subida que leva à Vieille Charité. À noite, comendo uma pizza no porto, pensa que talvez devesse ter ficado.",
        ending: { tone: "neutro", title: "Vergonha à marselhesa", message: "Um arremesso errado não é o fim do mundo: em Marselha, todo mundo ri junto e o jogo continua." },
      },
      final_flemme: {
        emoji: "🥱",
        text: "“ La flemme ? Par ce soleil ? ” s'étonne Karim, avant de hausser les épaules. Linu va s'asseoir à la terrasse du café et commande un sirop. Pendant deux heures, il regarde les autres jouer, crier et se disputer pour quelques centimètres. Quand la partie se termine, il regrette un peu de n'avoir pas pris de boule.",
        translation:
          "“Preguiça? Com esse sol?”, estranha o Karim, antes de dar de ombros. O Linu vai se sentar no café e pede um xarope. Durante duas horas, fica olhando os outros jogarem, gritarem e discutirem por poucos centímetros. Quando a partida termina, ele se arrepende um pouco de não ter pegado uma bocha.",
        ending: { tone: "neutro", title: "Só na torcida", message: "A preguiça venceu: o Linu assistiu à partida inteira sem jogar nenhuma bocha." },
      },
    },
  },
  {
    id: "fr-h32",
    level: "B2.3",
    cefr: "B2",
    title: "Chiner à la Braderie",
    emoji: "🧺",
    summary: "Na Braderie de Lille, o Linu ajuda o amigo Théo a vender as coisas do avô, entre gírias, verlan e um comprador bem suspeito.",
    cultural_context:
      "A Braderie de Lille, no primeiro fim de semana de setembro, é uma das maiores feiras de pulgas da Europa e tem origem na Idade Média. Durante a festa se comem “moules-frites” (mexilhões com batata frita), e os restaurantes empilham as cascas na calçada: o maior monte vira motivo de orgulho.",
    start: "start",
    glossary: [
      ["chiner", "garimpar objetos usados"],
      ["une meuf", "uma mulher; “ma meuf” = minha namorada (verlan de “femme”)"],
      ["poser un lapin", "dar o cano, dar bolo"],
      ["chelou", "esquisito, suspeito (verlan de “louche”)"],
      ["vénère", "irritado (verlan de “énervé”)"],
      ["une blinde", "uma grana preta"],
      ["avoir la dalle", "estar morrendo de fome"],
      ["c'est blindé", "está lotado"],
    ],
    nodes: {
      start: {
        emoji: "📦",
        text: "Samedi, six heures du matin, dans le Vieux-Lille. Les rues sont déjà envahies de stands, et Théo étale une vieille nappe sur le trottoir pour y exposer les affaires de son grand-père. “ Grave content que tu sois là, frère, dit-il en bâillant. Ma meuf devait m'aider, mais elle m'a posé un lapin : elle viendra qu'à midi. ” Il pose sur la nappe une caisse de vinyles, une lampe en cuivre et une pile de bandes dessinées.",
        translation:
          "Sábado, seis da manhã, no Vieux-Lille. As ruas já estão tomadas de barracas, e o Théo estende uma toalha velha na calçada para expor as coisas do avô. “Superfeliz que você veio, irmão”, diz ele bocejando. “Minha namorada ia me ajudar, mas me deu bolo: só vem ao meio-dia.” Ele coloca na toalha uma caixa de discos de vinil, uma luminária de cobre e uma pilha de gibis.",
        choices: [
          { text: "“ Pas de souci, je gère le stand avec toi jusqu'à midi. ”", translation: "“Sem problema, eu cuido da barraca com você até o meio-dia.”", next: "stand" },
          {
            text: "“ Ta mère ne vient pas du tout ? Dommage, j'aurais aimé la connaître. ”",
            translation: "“A sua mãe não vem de jeito nenhum? Pena, eu queria conhecê-la.”",
            wrong: "“Meuf” é verlan de “femme” e, com possessivo, “ma meuf” quer dizer “minha namorada”, não “minha mãe”. E ela vem, sim: “elle viendra qu'à midi” = só vem ao meio-dia (na fala, o “ne” de “ne… que” cai).",
          },
        ],
      },
      stand: {
        emoji: "🎵",
        text: "Vers neuf heures, un homme en chapeau s'arrête devant la caisse de vinyles et en sort un disque à la pochette jaunie. “ Je vous en donne deux euros, c'est déjà pas mal pour ce truc ”, lance-t-il sans même regarder Théo. Théo se penche vers Linu et chuchote : “ Il est chelou, lui. Mon grand-père disait que ce disque valait une blinde. ” L'homme sort déjà une pièce de sa poche, l'air pressé.",
        translation:
          "Por volta das nove, um homem de chapéu para diante da caixa de discos e tira um de capa amarelada. “Dou dois euros por ele, já está bom para essa coisa”, solta ele, sem nem olhar para o Théo. O Théo se inclina para o Linu e cochicha: “Esse cara é esquisito. Meu avô dizia que esse disco valia uma grana preta.” O homem já está tirando uma moeda do bolso, com cara de pressa.",
        choices: [
          { text: "“ Deux euros ? Vous rigolez, c'est un collector ! ”", translation: "“Dois euros? Tá de brincadeira, é peça de colecionador!”", next: "negocier" },
          { text: "“ Bon, d'accord, on va pas faire d'histoires. ”", translation: "“Tá bom, vamos deixar pra lá, sem confusão.”", next: "final_arnaque" },
        ],
      },
      negocier: {
        emoji: "😤",
        text: "L'homme devient tout de suite vénère : “ Oh là, calmez-vous, c'est pas la peine de vous prendre la tête pour un vieux disque ! ” Puis, bizarrement, il monte à vingt euros, puis à cinquante, sans qu'on lui demande rien. Linu et Théo échangent un regard : si le type insiste autant, c'est que le disque vaut bien plus. C'est à ce moment-là qu'une jeune femme arrive en courant, les bras chargés de croissants.",
        translation:
          "O homem fica irritado na hora: “Opa, calma aí, não precisa esquentar a cabeça por causa de um disco velho!” Depois, estranhamente, ele sobe para vinte euros, depois para cinquenta, sem ninguém pedir nada. O Linu e o Théo trocam um olhar: se o cara insiste tanto, é porque o disco vale muito mais. É nesse momento que uma moça chega correndo, com os braços cheios de croissants.",
        choices: [{ text: "Voir qui arrive.", translation: "Ver quem está chegando.", next: "manon" }],
      },
      manon: {
        emoji: "🥐",
        text: "C'est Manon, la copine de Théo : “ Surprise ! J'ai réussi à me libérer plus tôt. ” Elle jette un coup d'œil au disque et écarquille les yeux : “ Attends… c'est le disque que ton grand-père écoutait en boucle ! Tu vas pas le vendre, quand même ? ” L'homme au chapeau, lui, tend déjà ses cinquante euros.",
        translation:
          "É a Manon, a namorada do Théo: “Surpresa! Consegui me liberar mais cedo.” Ela dá uma olhada no disco e arregala os olhos: “Espera… é o disco que o seu avô ouvia sem parar! Você não vai vendê-lo, né?” O homem de chapéu já está estendendo os cinquenta euros.",
        choices: [
          { text: "“ On le garde : ça n'a pas de prix. ”", translation: "“A gente fica com ele: isso não tem preço.”", next: "moules" },
          { text: "“ On le vend quand même : cinquante euros, c'est une bonne affaire. ”", translation: "“A gente vende assim mesmo: cinquenta euros é um bom negócio.”", next: "final_vendu" },
        ],
      },
      moules: {
        emoji: "🦪",
        text: "À midi, les trois amis ont presque tout vendu, sauf le disque, que Théo garde précieusement sous le bras. Ils font la queue devant une brasserie où s'élève déjà une montagne de coquilles de moules. “ J'ai trop la dalle ”, soupire Manon. Le serveur s'approche : “ Désolé, c'est blindé, faut compter une bonne heure d'attente. Sinon, je peux vous faire des frites à emporter. ”",
        translation:
          "Ao meio-dia, os três amigos já venderam quase tudo, menos o disco, que o Théo guarda com carinho debaixo do braço. Eles entram na fila de uma cervejaria onde já se ergue uma montanha de cascas de mexilhão. “Estou morrendo de fome”, suspira a Manon. O garçom se aproxima: “Sinto muito, está lotado, tem uma boa hora de espera. Senão, posso fazer umas batatas fritas para viagem.”",
        choices: [
          { text: "“ On attend : des moules-frites à la Braderie, ça vaut le coup. ”", translation: "“A gente espera: mexilhão com fritas na Braderie vale a pena.”", next: "final_bom" },
          {
            text: "“ Super, il y a de la place tout de suite ! ”",
            translation: "“Ótimo, tem lugar agora mesmo!”",
            wrong: "O garçom disse “c'est blindé” (está lotado) e “faut compter une bonne heure d'attente” (tem uma boa hora de espera). A alternativa era levar batata frita para viagem (“à emporter”).",
          },
        ],
      },
      final_bom: {
        emoji: "🎉",
        text: "Une heure plus tard, attablés en terrasse, ils dévorent une marmite de moules et une montagne de frites. Théo raconte à Manon l'épisode du type chelou, et elle rit tellement qu'elle en renverse sa limonade. Le soir, ils écoutent le disque du grand-père sur la vieille platine de Théo. “ Pour une première Braderie, t'as géré, frère ”, conclut Théo.",
        translation:
          "Uma hora depois, sentados na calçada do restaurante, eles devoram uma panela de mexilhões e uma montanha de fritas. O Théo conta à Manon o episódio do cara esquisito, e ela ri tanto que derruba a limonada. À noite, eles ouvem o disco do avô na velha vitrola do Théo. “Para uma primeira Braderie, você mandou bem, irmão”, conclui o Théo.",
        ending: { tone: "bom", title: "Garimpeiro de primeira", message: "Você entendeu a gíria, desconfiou do comprador suspeito e salvou o disco do avô do Théo." },
      },
      final_arnaque: {
        emoji: "💸",
        text: "L'homme glisse deux euros dans la main de Théo et disparaît dans la foule. Une heure plus tard, Linu aperçoit le même disque sur le stand d'un collectionneur, à deux cents euros. Théo se prend la tête : “ On s'est fait avoir comme des bleus. ” Quand Manon arrive à midi, elle ne sait pas si elle doit rire ou pleurer.",
        translation:
          "O homem enfia dois euros na mão do Théo e some na multidão. Uma hora depois, o Linu vê o mesmo disco na barraca de um colecionador, a duzentos euros. O Théo põe as mãos na cabeça: “Caímos feito patinhos.” Quando a Manon chega ao meio-dia, não sabe se ri ou se chora.",
        ending: { tone: "neutro", title: "Passados para trás", message: "“Se faire avoir comme des bleus” = cair feito patinho. Na Braderie, desconfie de quem tem pressa demais." },
      },
      final_vendu: {
        emoji: "🤷",
        text: "Théo empoche les cinquante euros, et l'homme au chapeau file sans demander son reste. Manon ne dit rien, mais elle fait la tête pendant tout le déjeuner. Le soir, en rangeant le stand, Théo avoue qu'il aurait préféré garder le disque. “ L'argent, ça part vite ; les souvenirs, non ”, soupire-t-il.",
        translation:
          "O Théo embolsa os cinquenta euros, e o homem de chapéu some sem esperar mais nada. A Manon não diz nada, mas fica de cara amarrada o almoço inteiro. À noite, desmontando a barraca, o Théo confessa que preferia ter ficado com o disco. “Dinheiro vai embora rápido; lembrança, não”, suspira ele.",
        ending: { tone: "neutro", title: "Negócio fechado", message: "Cinquenta euros no bolso, mas o disco preferido do avô do Théo foi embora." },
      },
    },
  },
  {
    id: "fr-h33",
    level: "B2.3",
    cefr: "B2",
    title: "Motus et bouche cousue",
    emoji: "🎂",
    summary: "Em Nice, o Linu e o colega de apartamento preparam uma festa-surpresa para a amiga Léa, e o Linu precisa decifrar as expressões idiomáticas sem entregar o segredo.",
    cultural_context:
      "Nice só passou a pertencer à França em 1860, pelo Tratado de Turim; antes era ligada ao Reino da Sardenha. A cidade tem pratos próprios, como a “socca”, panqueca fina de farinha de grão-de-bico assada no forno a lenha, e a “tourte de blettes”, torta de acelga que também existe na versão doce, com passas e pinhões.",
    start: "start",
    glossary: [
      ["motus et bouche cousue", "bico calado, nem uma palavra"],
      ["mettre les pieds dans le plat", "falar o que não devia, dar um fora"],
      ["raconter des salades", "contar lorota"],
      ["coûter les yeux de la tête", "custar os olhos da cara"],
      ["être dans de beaux draps", "estar numa enrascada"],
      ["tomber dans les pommes", "desmaiar (muitas vezes, exagero para “estar exausto”)"],
      ["avoir le cafard", "estar na fossa, deprimido"],
      ["vendre la mèche", "entregar o segredo"],
    ],
    nodes: {
      start: {
        emoji: "🏠",
        text: "Dans la petite colocation du Vieux-Nice, Jules ferme la porte à clé et baisse la voix. “ Samedi, c'est l'anniv de Léa. On lui fait une surprise sur la colline du Château, avec toute la bande. Mais attention, hein : surtout, tu mets pas les pieds dans le plat ! Elle se doute de rien. ”",
        translation:
          "No pequeno apartamento dividido do Vieux-Nice, o Jules tranca a porta e baixa a voz. “Sábado é o aniversário da Léa. A gente vai fazer uma surpresa para ela na colina do Château, com a turma toda. Mas atenção, hein: acima de tudo, não vá dar com a língua nos dentes! Ela não desconfia de nada.”",
        choices: [
          { text: "“ Promis : motus et bouche cousue. ”", translation: "“Prometo: bico calado.”", next: "marche" },
          {
            text: "“ D'accord, je ferai attention à ne pas marcher dans les assiettes pendant la fête. ”",
            translation: "“Está bem, vou tomar cuidado para não pisar nos pratos durante a festa.”",
            wrong: "“Mettre les pieds dans le plat” é expressão: quer dizer falar o que não devia, dar um fora. O Jules está pedindo que o Linu não conte nada à Léa, que “se doute de rien” (não desconfia de nada).",
          },
        ],
      },
      marche: {
        emoji: "🥞",
        text: "Le lendemain, au marché du cours Saleya, Linu fait la queue pour acheter une part de socca bien chaude. Soudain, une voix familière l'interpelle : c'est Léa, un cabas plein de fleurs sous le bras. “ Salut Linu ! T'as l'air bizarre, toi… Et Jules est chelou depuis une semaine. Vous me racontez pas des salades, au moins ? ” Linu sent le bec lui chauffer.",
        translation:
          "No dia seguinte, na feira do cours Saleya, o Linu entra na fila para comprar um pedaço de socca bem quentinha. De repente, uma voz conhecida o chama: é a Léa, com uma sacola cheia de flores debaixo do braço. “Oi, Linu! Você está com uma cara estranha… E o Jules está esquisito há uma semana. Vocês não estão me contando lorota, né?” O Linu sente o bico esquentar.",
        choices: [
          { text: "“ Mais non ! Jules a juste un peu le cafard en ce moment. ”", translation: "“Imagina! O Jules só está meio na fossa esses dias.”", next: "preparatifs" },
          { text: "“ Bon, je vais tout te dire : samedi, on te prépare une surprise ! ”", translation: "“Tá bom, vou te contar tudo: no sábado, vamos fazer uma surpresa para você!”", next: "final_gaffe" },
        ],
      },
      preparatifs: {
        emoji: "🧁",
        text: "Le vendredi soir, Jules revient de la pâtisserie, la mine sombre. “ Le gâteau qu'ils proposent coûte les yeux de la tête : soixante euros ! ” Il propose de le faire eux-mêmes, avec la recette de sa grand-mère. Linu, qui n'a jamais cuisiné de sa vie, hésite une seconde.",
        translation:
          "Na sexta à noite, o Jules volta da confeitaria de cara fechada. “O bolo que eles vendem custa os olhos da cara: sessenta euros!” Ele propõe que os dois façam o bolo, com a receita da avó dele. O Linu, que nunca cozinhou na vida, hesita um segundo.",
        choices: [
          { text: "“ Chiche ! On le fait nous-mêmes, ce sera plus sympa. ”", translation: "“Topo! A gente faz, vai ser mais legal.”", next: "gateau" },
          { text: "“ Tant pis pour le prix, on l'achète. ”", translation: "“Paciência com o preço, a gente compra.”", next: "montee" },
        ],
      },
      gateau: {
        emoji: "🔥",
        text: "Deux heures plus tard, une odeur de brûlé envahit l'appartement. Jules sort du four un gâteau noir comme du charbon : “ C'est cramé… On est dans de beaux draps ! ” Linu a alors une idée : la voisine du dessous, Mme Giordano, fait la meilleure tourte de blettes sucrée du quartier. Une heure après, ils remontent l'escalier avec une tourte encore tiède et quelques bougies.",
        translation:
          "Duas horas depois, um cheiro de queimado toma conta do apartamento. O Jules tira do forno um bolo preto como carvão: “Torrou… Estamos numa enrascada!” O Linu então tem uma ideia: a vizinha de baixo, a senhora Giordano, faz a melhor torta doce de acelga do bairro. Uma hora depois, eles sobem a escada com uma torta ainda morna e algumas velinhas.",
        choices: [{ text: "Partir pour la colline du Château avec la tourte.", translation: "Ir para a colina do Château com a torta.", next: "montee" }],
      },
      montee: {
        emoji: "⛰️",
        text: "Samedi, la bande se cache près de la cascade de la colline du Château, d'où l'on voit toute la baie des Anges. Jules a donné rendez-vous à Léa en haut, sous prétexte d'une balade. Elle arrive enfin, essoufflée, les joues rouges. “ Tous ces escaliers… Je suis crevée, je vais tomber dans les pommes ! ” lance-t-elle en riant.",
        translation:
          "No sábado, a turma se esconde perto da cascata da colina do Château, de onde se vê toda a baía dos Anjos. O Jules marcou com a Léa lá em cima, com a desculpa de um passeio. Ela finalmente chega, ofegante, com as bochechas vermelhas. “Quanta escada… Estou morta, vou desmaiar!”, diz ela, rindo.",
        choices: [
          { text: "Lui proposer de s'asseoir sur le banc… juste devant la cachette.", translation: "Oferecer que ela se sente no banco… bem na frente do esconderijo.", next: "final_bom" },
          {
            text: "Appeler tout de suite les pompiers : Léa va s'évanouir !",
            translation: "Chamar os bombeiros agora mesmo: a Léa vai desmaiar!",
            wrong: "A Léa disse que ia “tomber dans les pommes” rindo: é exagero para dizer que está exausta com tantas escadas (“je suis crevée” = estou morta de cansaço). Ela está bem.",
          },
        ],
      },
      final_bom: {
        emoji: "🎉",
        text: "À peine Léa est-elle assise que toute la bande surgit en criant “ Surprise ! ”. Elle éclate de rire, puis de larmes, puis de rire encore. On allume les bougies, on chante, et le dessert fait l'unanimité. “ Et moi qui croyais que Jules avait le cafard ! ” dit-elle en serrant Linu dans ses bras.",
        translation:
          "Mal a Léa se senta, a turma toda aparece gritando “Surpresa!”. Ela cai na risada, depois no choro, depois na risada de novo. Acendem as velas, cantam, e a sobremesa agrada a todos. “E eu achando que o Jules estava na fossa!”, diz ela, abraçando o Linu.",
        ending: { tone: "bom", title: "Surpresa perfeita", message: "Você entendeu as expressões idiomáticas, não levou nada ao pé da letra e guardou o segredo até o fim." },
      },
      final_gaffe: {
        emoji: "🤦",
        text: "Les yeux de Léa s'illuminent : “ Une surprise ? Pour moi ? ” Le soir même, Jules apprend que Linu a vendu la mèche et lève les yeux au ciel. Samedi, la fête a bien lieu, mais Léa fait semblant d'être surprise, et tout le monde le voit. Linu se promet de tourner sept fois sa langue dans sa bouche, la prochaine fois.",
        translation:
          "Os olhos da Léa brilham: “Uma surpresa? Para mim?” Na mesma noite, o Jules descobre que o Linu entregou o segredo e revira os olhos. No sábado, a festa acontece, mas a Léa finge estar surpresa, e todo mundo percebe. O Linu promete a si mesmo pensar duas vezes antes de falar, da próxima vez.",
        ending: { tone: "neutro", title: "Segredo entregue", message: "“Vendre la mèche” = entregar o segredo; “tourner sept fois sa langue dans sa bouche” = pensar antes de falar. A festa aconteceu, mas a surpresa foi para o espaço." },
      },
    },
  },
  // ───────────────────────── B2.4 ─────────────────────────
  {
    id: "fr-h34",
    level: "B2.4",
    cefr: "B2",
    title: "Le marché de la discorde",
    emoji: "🎄",
    summary: "Em Estrasburgo, o Linu precisa resumir com imparcialidade, num conselho de bairro, os argumentos de comerciantes e moradores sobre o famoso mercado de Natal.",
    cultural_context:
      "O mercado de Natal de Estrasburgo, o “Christkindelsmärik”, existe desde 1570 e é um dos mais antigos da Europa. A Grande Île, o centro histórico cercado pelo rio Ill, é Patrimônio Mundial da UNESCO desde 1988, e a cidade é sede do Parlamento Europeu.",
    start: "start",
    glossary: [
      ["cependant / néanmoins", "no entanto / mesmo assim"],
      ["en revanche", "por outro lado (não é “vingança”!)"],
      ["d'ailleurs", "aliás"],
      ["certes", "é verdade que, sem dúvida"],
      ["bien que + subjonctif", "embora"],
      ["pour que / afin que + subjonctif", "para que"],
      ["par conséquent", "portanto, por consequência"],
      ["les bredele", "biscoitinhos de Natal da Alsácia"],
    ],
    nodes: {
      start: {
        emoji: "🏛️",
        text: "Strasbourg, fin novembre. Linu, bénévole au conseil de quartier de la Grande Île, est convoqué par la présidente, Mme Keller. “ Ce soir, nous débattons d'une question sensible : faut-il limiter l'accès au marché de Noël ? Je voudrais que vous résumiez les deux positions en ouverture, pour que chacun puisse se faire une opinion. D'ailleurs, soyez bref : nous n'avons qu'une heure. ”",
        translation:
          "Estrasburgo, fim de novembro. O Linu, voluntário no conselho de bairro da Grande Île, é chamado pela presidente, a senhora Keller. “Hoje à noite vamos debater uma questão delicada: é preciso limitar o acesso ao mercado de Natal? Eu gostaria que você resumisse as duas posições na abertura, para que cada um possa formar uma opinião. Aliás, seja breve: só temos uma hora.”",
        choices: [
          { text: "“ Entendu : je vais rencontrer des commerçants et des habitants. ”", translation: "“Entendido: vou conversar com comerciantes e moradores.”", next: "commercant" },
          {
            text: "“ Très bien, je vais défendre votre position avec conviction. ”",
            translation: "“Muito bem, vou defender a sua posição com convicção.”",
            wrong: "A senhora Keller não pediu que o Linu defendesse lado nenhum: “que vous résumiez les deux positions… pour que chacun puisse se faire une opinion” = que você resuma as duas posições, para que cada um forme a sua opinião.",
          },
        ],
      },
      commercant: {
        emoji: "🍪",
        text: "Sous un chalet illuminé de la place Broglie, M. Weber vend des bredele depuis trente ans. “ Le marché fait vivre des centaines de familles, explique-t-il en emballant des biscuits à la cannelle. Certes, il y a beaucoup de monde ; néanmoins, sans les touristes, la moitié des commerces du centre fermeraient. Et puis, ce marché existe depuis le seizième siècle : on ne va pas le sacrifier pour quelques embouteillages ! ”",
        translation:
          "Numa barraquinha iluminada da praça Broglie, o senhor Weber vende bredele há trinta anos. “O mercado sustenta centenas de famílias”, explica ele, embrulhando biscoitos de canela. “É verdade que tem muita gente; mesmo assim, sem os turistas, metade das lojas do centro fecharia. Além disso, esse mercado existe desde o século XVI: não vamos sacrificá-lo por causa de alguns engarrafamentos!”",
        choices: [{ text: "Aller voir une habitante du quartier.", translation: "Ir conversar com uma moradora do bairro.", next: "habitante" }],
      },
      habitante: {
        emoji: "🏘️",
        text: "Au pied de la cathédrale, Mme Roth reçoit Linu dans son petit appartement. “ Bien que j'adore Noël, je ne peux plus sortir de chez moi en décembre : la foule bloque ma porte du matin au soir. En revanche, je ne demande pas qu'on supprime le marché, attention ! Je voudrais seulement qu'on l'étende à d'autres quartiers, afin que le centre puisse respirer. ”",
        translation:
          "Ao pé da catedral, a senhora Roth recebe o Linu no seu pequeno apartamento. “Embora eu adore o Natal, não consigo mais sair de casa em dezembro: a multidão bloqueia a minha porta de manhã à noite. Por outro lado, eu não peço que acabem com o mercado, veja bem! Só queria que o estendessem a outros bairros, para que o centro possa respirar.”",
        choices: [
          { text: "“ Si je comprends bien, vous souhaitez qu'on répartisse le marché dans toute la ville. ”", translation: "“Se entendi bem, a senhora quer que o mercado seja distribuído pela cidade toda.”", next: "redaction" },
          {
            text: "“ Donc, vous voulez qu'on supprime le marché de Noël. ”",
            translation: "“Então a senhora quer que acabem com o mercado de Natal.”",
            wrong: "“En revanche” introduz um contraste: “je ne demande pas qu'on supprime le marché” = eu não peço que acabem com o mercado. Ela quer espalhá-lo por outros bairros, “afin que le centre puisse respirer”.",
          },
        ],
      },
      redaction: {
        emoji: "📝",
        text: "Le soir, à la table de sa cuisine, Linu rédige son introduction. Il veut une phrase qui rende justice aux deux camps, sans prendre parti. Il se souvient aussi d'un conseil de Mme Keller : en français, on met une espace avant les deux-points, le point-virgule, le point d'exclamation et le point d'interrogation. Il hésite entre deux versions.",
        translation:
          "À noite, na mesa da cozinha, o Linu redige a sua introdução. Ele quer uma frase que faça justiça aos dois lados, sem tomar partido. Lembra-se também de um conselho da senhora Keller: em francês, coloca-se um espaço antes dos dois-pontos, do ponto e vírgula, do ponto de exclamação e do ponto de interrogação. Ele hesita entre duas versões.",
        choices: [
          {
            text: "“ Le marché est une richesse pour la ville ; cependant, il pèse sur la vie des habitants. Par conséquent, la question n'est peut-être pas de le limiter, mais de mieux le répartir. ”",
            translation: "“O mercado é uma riqueza para a cidade; no entanto, pesa na vida dos moradores. Portanto, a questão talvez não seja limitá-lo, mas distribuí-lo melhor.”",
            next: "reunion",
          },
          { text: "“ Le marché est devenu un cauchemar, d'ailleurs tout le monde le sait. ”", translation: "“O mercado virou um pesadelo, aliás todo mundo sabe disso.”", next: "final_partial" },
        ],
      },
      reunion: {
        emoji: "🗣️",
        text: "À la réunion, Linu lit son introduction, et la salle l'écoute en silence. Mais à peine Mme Roth a-t-elle pris la parole que M. Weber l'interrompt, rouge de colère : “ Vous voulez tuer le commerce, voilà la vérité ! ” Des murmures s'élèvent de tous côtés, et Mme Keller regarde Linu, comme pour lui demander d'intervenir.",
        translation:
          "Na reunião, o Linu lê a introdução, e a sala escuta em silêncio. Mas mal a senhora Roth começa a falar, o senhor Weber a interrompe, vermelho de raiva: “A senhora quer matar o comércio, essa é a verdade!” Murmúrios surgem de todos os lados, e a senhora Keller olha para o Linu, como se pedisse que ele interviesse.",
        choices: [
          {
            text: "“ Monsieur Weber, je comprends votre inquiétude ; néanmoins, laissez Mme Roth terminer, afin que nous puissions ensuite vous entendre. ”",
            translation: "“Senhor Weber, entendo a sua preocupação; mesmo assim, deixe a senhora Roth terminar, para que depois possamos ouvi-lo.”",
            next: "final_bom",
          },
          { text: "Se taire : ce n'est plus son rôle.", translation: "Ficar calado: isso já não é papel dele.", next: "final_chaos" },
        ],
      },
      final_bom: {
        emoji: "🎉",
        text: "M. Weber se rassoit en grommelant, et Mme Roth expose son idée jusqu'au bout. À la surprise générale, M. Weber reconnaît qu'un chalet dans un autre quartier ne lui déplairait pas, pourvu qu'il soit bien signalé. Le conseil vote à l'unanimité pour proposer à la mairie de nouveaux emplacements. En sortant, Mme Keller glisse à Linu : “ Vous avez été parfaitement impartial. D'ailleurs, l'année prochaine, c'est vous qui animerez le débat. ”",
        translation:
          "O senhor Weber volta a se sentar resmungando, e a senhora Roth expõe a ideia dela até o fim. Para surpresa geral, o senhor Weber admite que uma barraquinha em outro bairro não seria nada mal, contanto que fosse bem sinalizada. O conselho vota por unanimidade propor à prefeitura novos locais. Na saída, a senhora Keller diz ao Linu: “Você foi perfeitamente imparcial. Aliás, no ano que vem, quem vai conduzir o debate é você.”",
        ending: { tone: "bom", title: "Mediador imparcial", message: "Você resumiu as duas posições sem distorcer nenhuma, usou os conectores certos e evitou que o debate virasse briga." },
      },
      final_partial: {
        emoji: "😬",
        text: "Linu lit son introduction, et M. Weber se lève aussitôt : “ Un cauchemar ? Merci pour les commerçants ! ” La moitié de la salle applaudit, l'autre moitié proteste, et le débat tourne au règlement de comptes. Mme Keller reprend la parole avec peine et reporte le vote à janvier. Dans le tram du retour, Linu relit sa phrase et comprend qu'il a pris parti dès la première ligne.",
        translation:
          "O Linu lê a introdução, e o senhor Weber se levanta na hora: “Um pesadelo? Muito obrigado pelos comerciantes!” Metade da sala aplaude, a outra metade protesta, e o debate vira acerto de contas. A senhora Keller retoma a palavra a duras penas e adia a votação para janeiro. No bonde de volta, o Linu relê a frase e entende que tomou partido desde a primeira linha.",
        ending: { tone: "neutro", title: "Tomou partido", message: "Um resumo imparcial não pode começar julgando: a sua frase inflamou um dos lados antes mesmo do debate." },
      },
      final_chaos: {
        emoji: "🌪️",
        text: "Personne n'arrête M. Weber, qui parle pendant dix minutes, puis Mme Roth, qui lui répond sur le même ton. L'heure s'écoule sans qu'aucune proposition soit votée. Mme Keller lève la séance en soupirant, et chacun rentre chez soi plus convaincu que jamais d'avoir raison. Dehors, le marché scintille, indifférent à la dispute.",
        translation:
          "Ninguém interrompe o senhor Weber, que fala por dez minutos, nem a senhora Roth, que responde no mesmo tom. A hora passa sem que nenhuma proposta seja votada. A senhora Keller encerra a sessão suspirando, e cada um volta para casa mais convencido do que nunca de que tem razão. Lá fora, o mercado brilha, indiferente à briga.",
        ending: { tone: "neutro", title: "Diálogo de surdos", message: "Sem ninguém para mediar, cada um falou para si mesmo e nada foi decidido." },
      },
    },
  },
  {
    id: "fr-h35",
    level: "B2.4",
    cefr: "B2",
    title: "Thèse, antithèse, synthèse",
    emoji: "🚋",
    summary: "Em Bordeaux, o Linu precisa escrever uma dissertação à francesa sobre os carros no centro da cidade e sai às ruas para ouvir os moradores.",
    cultural_context:
      "Parte do centro histórico de Bordeaux, o “Port de la Lune”, é Patrimônio Mundial da UNESCO desde 2007. No centro, o bonde funciona sem fios aéreos, com alimentação pelo solo, para não esconder as fachadas, e em frente à Place de la Bourse fica o “miroir d'eau”, um grande espelho-d'água à beira do rio Garonne. Na escola francesa, a “dissertation” segue o plano clássico: tese, antítese e síntese.",
    start: "start",
    glossary: [
      ["à moins que (ne) + subjonctif", "a menos que (o “ne” aqui não nega nada)"],
      ["or", "ora, acontece que (introduz um fato que muda o raciocínio)"],
      ["pourvu que + subjonctif", "contanto que"],
      ["encore faut-il que", "mas para isso é preciso que"],
      ["en revanche", "por outro lado"],
      ["d'ailleurs", "aliás"],
      ["le tram", "o bonde (VLT)"],
      ["la dissertation", "a redação argumentativa"],
    ],
    nodes: {
      start: {
        emoji: "🎓",
        text: "Dans une école de langues du quartier des Chartrons, la professeure, Mme Dupuy, écrit le sujet au tableau : “ Faut-il interdire la voiture dans le centre-ville ? ” Elle se retourne vers la classe : “ N'oubliez pas : thèse, antithèse, synthèse. Et je ne veux pas de copier-coller, à moins que vous ne citiez vos sources. ” Linu décide d'aller chercher ses arguments dans la rue.",
        translation:
          "Numa escola de idiomas do bairro dos Chartrons, a professora, senhora Dupuy, escreve o tema no quadro: “É preciso proibir o carro no centro da cidade?” Ela se vira para a turma: “Não se esqueçam: tese, antítese, síntese. E não quero copia e cola, a menos que vocês citem as fontes.” O Linu decide ir buscar os seus argumentos na rua.",
        choices: [
          { text: "Aller interroger des Bordelais sur les quais.", translation: "Ir entrevistar moradores de Bordeaux no cais.", next: "quais" },
          {
            text: "Copier un bon article sans le citer, puisque la prof dit que c'est permis.",
            translation: "Copiar um bom artigo sem citá-lo, já que a professora disse que pode.",
            wrong: "“À moins que vous ne citiez vos sources” = a menos que vocês citem as fontes. Esse “ne” é expletivo: não nega nada. Copiar sem citar está proibido.",
          },
        ],
      },
      quais: {
        emoji: "🚲",
        text: "Près du miroir d'eau, des enfants sautent dans les quelques centimètres d'eau qui reflètent la place de la Bourse. Chloé, une cycliste, accepte de répondre à Linu. “ Depuis que le tram passe, le centre respire, et les façades ont retrouvé leur couleur. D'ailleurs, regardez : pas un seul câble au-dessus des rails ! Pour moi, moins il y a de voitures, mieux on vit. ”",
        translation:
          "Perto do espelho-d'água, crianças pulam nos poucos centímetros de água que refletem a Place de la Bourse. A Chloé, uma ciclista, aceita responder ao Linu. “Desde que o bonde passa por aqui, o centro respira, e as fachadas recuperaram a cor. Aliás, olhe: nem um cabo sequer em cima dos trilhos! Para mim, quanto menos carros, melhor se vive.”",
        choices: [{ text: "Aller voir un commerçant du centre.", translation: "Ir falar com um comerciante do centro.", next: "epicier" }],
      },
      epicier: {
        emoji: "🧀",
        text: "Dans sa petite épicerie fine, M. Lacoste écoute Linu en rangeant des cannelés dans une vitrine. “ Moi, je veux bien qu'on protège la planète ; encore faut-il que mes clients puissent venir. Or, la moitié d'entre eux habitent à la campagne, là où il n'y a ni tram ni bus. Si on leur interdit de venir en voiture, ils iront faire leurs courses au supermarché de la zone commerciale. ”",
        translation:
          "Na sua pequena mercearia fina, o senhor Lacoste escuta o Linu enquanto arruma canelés numa vitrine. “Eu até concordo que se proteja o planeta; mas para isso é preciso que os meus clientes consigam vir. Ora, metade deles mora no campo, onde não há nem bonde nem ônibus. Se proibirem que venham de carro, eles vão fazer compras no supermercado da zona comercial.”",
        choices: [{ text: "Aller s'asseoir sur un banc, près d'un vieux monsieur.", translation: "Ir se sentar num banco, perto de um senhor idoso.", next: "papi" }],
      },
      papi: {
        emoji: "👴",
        text: "Sur un banc du Jardin public, M. Brun, quatre-vingt-deux ans, regarde passer les promeneurs. “ Sans voiture, comment voulez-vous que j'aille chez le cardiologue, à l'autre bout de la ville ? Le tram, c'est très bien, pourvu qu'il y ait des places assises. ” Il sourit malicieusement : “ Mais, entre nous, ma fille est bien contente de ne plus respirer les gaz d'échappement quand elle pousse la poussette. ”",
        translation:
          "Num banco do Jardin public, o senhor Brun, de oitenta e dois anos, olha as pessoas passeando. “Sem carro, como é que o senhor quer que eu vá ao cardiologista, do outro lado da cidade? O bonde é muito bom, contanto que haja lugar para sentar.” Ele sorri, maroto: “Mas, cá entre nós, a minha filha está bem contente de não respirar mais fumaça de escapamento quando empurra o carrinho de bebê.”",
        choices: [{ text: "Rentrer rédiger le plan.", translation: "Voltar para casa e montar o plano.", next: "plan" }],
      },
      plan: {
        emoji: "🗂️",
        text: "Le soir, Linu étale ses notes sur son lit. Il a trois témoignages, beaucoup d'idées et une seule nuit pour construire un plan cohérent. Mme Dupuy a été claire : chaque partie doit s'enchaîner à la précédente grâce à des connecteurs logiques. Il griffonne plusieurs versions et hésite.",
        translation:
          "À noite, o Linu espalha as anotações na cama. Ele tem três depoimentos, muitas ideias e uma única noite para construir um plano coerente. A senhora Dupuy foi clara: cada parte deve se encadear à anterior com conectores lógicos. Ele rabisca várias versões e hesita.",
        choices: [
          {
            text: "I. Les bienfaits d'un centre sans voitures ; II. Les limites : commerçants et personnes âgées ; III. Un centre apaisé, mais accessible à tous.",
            translation: "I. As vantagens de um centro sem carros; II. Os limites: comerciantes e idosos; III. Um centro tranquilo, mas acessível a todos.",
            next: "oral",
          },
          {
            text: "I. Les voitures polluent ; II. Les voitures font du bruit ; III. Les voitures sont dangereuses.",
            translation: "I. Os carros poluem; II. Os carros fazem barulho; III. Os carros são perigosos.",
            next: "final_partial",
          },
          {
            text: "Commencer la deuxième partie par “ en revanche ”, pour ajouter un argument dans le même sens que la première.",
            translation: "Começar a segunda parte com “en revanche”, para acrescentar um argumento no mesmo sentido da primeira.",
            wrong: "“En revanche” marca contraste (por outro lado): serve justamente para abrir a antítese, com argumentos contrários aos da primeira parte. Para somar um argumento no mesmo sentido, usa-se “de plus”, “d'ailleurs” ou “en outre”.",
          },
        ],
      },
      oral: {
        emoji: "🎤",
        text: "Le lendemain, Linu présente son plan devant la classe. Mme Dupuy hoche la tête, puis l'arrête d'un geste : “ Très bien. Maintenant, votre conclusion, en une seule phrase. ” Tous les regards se tournent vers lui, et il sent ses plumes se hérisser.",
        translation:
          "No dia seguinte, o Linu apresenta o plano diante da turma. A senhora Dupuy concorda com a cabeça e depois o interrompe com um gesto: “Muito bem. Agora, a sua conclusão, numa frase só.” Todos os olhares se voltam para ele, e ele sente as penas se arrepiarem.",
        choices: [
          {
            text: "“ Bien qu'il faille réduire la place de la voiture, il faut que le centre reste accessible à tous, notamment aux personnes âgées et aux habitants de la campagne. ”",
            translation: "“Embora seja preciso reduzir o espaço do carro, é necessário que o centro continue acessível a todos, sobretudo aos idosos e a quem mora no campo.”",
            next: "final_bom",
          },
          { text: "“ Bref, les voitures, c'est nul, point final. ”", translation: "“Resumindo: carro é um horror, ponto final.”", next: "final_moyen" },
        ],
      },
      final_bom: {
        emoji: "🎉",
        text: "Mme Dupuy sourit : “ Nuancée, précise, et au subjonctif : je n'en demandais pas tant. ” Une semaine plus tard, Linu récupère sa copie avec un seize sur vingt et un commentaire à l'encre verte : “ Belle synthèse, qui tient compte de toutes les voix. ” Il en envoie une photo à Chloé, qui lui avait laissé son numéro. La réponse arrive le soir même : “ Bravo ! On fête ça à vélo ? ”",
        translation:
          "A senhora Dupuy sorri: “Nuançada, precisa e no subjuntivo: eu não pedia tanto.” Uma semana depois, o Linu recebe a redação com dezesseis de vinte e um comentário em tinta verde: “Bela síntese, que leva em conta todas as vozes.” Ele manda uma foto para a Chloé, que tinha deixado o número dela. A resposta chega na mesma noite: “Parabéns! Vamos comemorar de bicicleta?”",
        ending: { tone: "bom", title: "Dezesseis de vinte", message: "Você ouviu todos os lados, construiu um plano dialético e concluiu com nuance. Na França, 16/20 é uma nota excelente." },
      },
      final_partial: {
        emoji: "📉",
        text: "Mme Dupuy lit le plan et fronce les sourcils : “ Trois parties qui disent la même chose, ce n'est pas une dissertation, c'est un tract. ” Linu comprend qu'il a oublié M. Lacoste et M. Brun, pourtant si intéressants. Il obtient un neuf sur vingt, avec une remarque en marge : “ Où est l'antithèse ? ” Il se promet de ne plus laisser ses notes au fond du sac.",
        translation:
          "A senhora Dupuy lê o plano e franze a testa: “Três partes que dizem a mesma coisa não são uma dissertação, são um panfleto.” O Linu percebe que esqueceu o senhor Lacoste e o senhor Brun, que eram tão interessantes. Ele tira nove de vinte, com uma observação na margem: “Cadê a antítese?” E promete a si mesmo não deixar mais as anotações no fundo da mochila.",
        ending: { tone: "neutro", title: "Cadê a antítese?", message: "Um plano que só repete a tese não é uma dissertação: faltou dar voz aos argumentos contrários." },
      },
      final_moyen: {
        emoji: "😐",
        text: "Quelques élèves pouffent de rire, et Mme Dupuy soupire : “ Votre plan était prometteur ; votre conclusion, en revanche, le trahit complètement. ” Linu rougit jusqu'au bout du bec. Il obtient un onze sur vingt, avec cette remarque : “ Une conclusion n'est pas un slogan. ” Dans le tram du retour, il réécrit mentalement sa phrase dix fois.",
        translation:
          "Alguns alunos seguram o riso, e a senhora Dupuy suspira: “O seu plano era promissor; a sua conclusão, por outro lado, o trai completamente.” O Linu fica vermelho até a ponta do bico. Tira onze de vinte, com esta observação: “Conclusão não é slogan.” No bonde de volta, ele reescreve a frase de cabeça dez vezes.",
        ending: { tone: "neutro", title: "Conclusão-slogan", message: "Um bom plano pede uma conclusão à altura: nuançada, e não um grito de guerra." },
      },
    },
  },
  {
    id: "fr-h36",
    level: "B2.4",
    cefr: "B2",
    title: "Le mont Blanc pour tous ?",
    emoji: "🏔️",
    summary: "Em Chamonix, o Linu é jurado de um torneio de debates entre estudantes do ensino médio sobre limitar o acesso ao Mont Blanc e precisa julgar os argumentos, não as opiniões.",
    cultural_context:
      "O Mont Blanc, ponto mais alto dos Alpes, foi escalado pela primeira vez em 8 de agosto de 1786 por Jacques Balmat e Michel-Gabriel Paccard, dois homens de Chamonix. Em 1924, Chamonix sediou os primeiros Jogos Olímpicos de Inverno da história.",
    start: "start",
    glossary: [
      ["quoi que + subjonctif", "o que quer que (“quoi que vous pensiez” = pense o que pensar)"],
      ["or", "ora, acontece que"],
      ["c'est pourquoi", "é por isso que"],
      ["toutefois", "todavia, no entanto"],
      ["à condition que + subjonctif", "com a condição de que, desde que"],
      ["une attaque personnelle", "um ataque pessoal (argumento “ad hominem”)"],
      ["le refuge", "o abrigo de montanha"],
      ["le juré", "o jurado"],
    ],
    nodes: {
      start: {
        emoji: "🏫",
        text: "Au lycée de Chamonix, la grande salle sent le café et le trac. Linu a été invité comme juré d'un concours de débat, dont le sujet est affiché au-dessus de l'estrade : “ Faut-il limiter l'accès au mont Blanc ? ” M. Perrin, l'organisateur, lui tend une grille d'évaluation. “ Vous noterez la qualité des arguments, et non vos opinions personnelles. Quoi que vous pensiez du sujet, restez neutre. ”",
        translation:
          "No liceu de Chamonix, o salão cheira a café e a nervosismo. O Linu foi convidado para ser jurado de um concurso de debate, cujo tema está afixado acima do palco: “É preciso limitar o acesso ao Mont Blanc?” O senhor Perrin, o organizador, lhe entrega uma ficha de avaliação. “O senhor vai avaliar a qualidade dos argumentos, e não as suas opiniões pessoais. Pense o que pensar sobre o tema, mantenha-se neutro.”",
        choices: [
          { text: "“ Compris : je jugerai la logique, les exemples et les réponses aux objections. ”", translation: "“Entendido: vou julgar a lógica, os exemplos e as respostas às objeções.”", next: "lucie" },
          {
            text: "“ Parfait : je voterai pour l'équipe qui pense comme moi. ”",
            translation: "“Perfeito: vou votar no time que pensa como eu.”",
            wrong: "“Quoi que vous pensiez du sujet, restez neutre” = pense o que pensar sobre o tema, mantenha-se neutro. O jurado avalia a qualidade dos argumentos, não se concorda com eles.",
          },
        ],
      },
      lucie: {
        emoji: "🙋‍♀️",
        text: "Lucie ouvre le débat pour l'équipe favorable à un permis. “ Chaque été, des milliers d'alpinistes tentent l'ascension du sommet. Or, les refuges ne peuvent pas accueillir tout le monde ; par conséquent, certains bivouaquent n'importe où et laissent leurs déchets derrière eux. C'est pourquoi nous proposons un permis obligatoire, afin que la montagne soit protégée et que les secours soient moins débordés. ”",
        translation:
          "A Lucie abre o debate pelo time a favor de uma permissão. “Todo verão, milhares de alpinistas tentam subir ao cume. Ora, os abrigos não conseguem receber todo mundo; por consequência, alguns acampam em qualquer lugar e deixam o lixo para trás. É por isso que propomos uma permissão obrigatória, para que a montanha seja protegida e as equipes de resgate fiquem menos sobrecarregadas.”",
        choices: [{ text: "Écouter l'équipe adverse.", translation: "Ouvir o time adversário.", next: "hugo" }],
      },
      hugo: {
        emoji: "🙋‍♂️",
        text: "Hugo lui répond pour l'équipe opposée. “ La montagne appartient à tout le monde. Certes, il y a des abus ; toutefois, un permis favoriserait ceux qui ont le temps et les moyens de réserver. D'ailleurs, si on ferme une voie, les gens en prendront une autre, plus dangereuse et moins surveillée. ” Puis il ajoute, un sourire en coin : “ Et puis, mon adversaire vient de Paris : qu'est-ce qu'elle connaît à la montagne ? ” Quelques rires éclatent dans la salle.",
        translation:
          "O Hugo responde pelo time contrário. “A montanha pertence a todos. É verdade que há abusos; no entanto, uma permissão favoreceria quem tem tempo e dinheiro para reservar. Aliás, se fecharem uma rota, as pessoas vão pegar outra, mais perigosa e menos vigiada.” Depois ele acrescenta, com um sorriso de canto: “E além disso, a minha adversária é de Paris: o que ela entende de montanha?” Algumas risadas explodem na sala.",
        choices: [
          { text: "Noter l'attaque personnelle : ce n'est pas un argument.", translation: "Anotar o ataque pessoal: isso não é argumento.", next: "question" },
          { text: "Laisser passer : c'était drôle, et le public a ri.", translation: "Deixar passar: foi engraçado, e o público riu.", next: "final_injuste" },
        ],
      },
      question: {
        emoji: "❓",
        text: "Pendant la phase des questions, M. Perrin donne la parole au jury. Linu relit ses notes : l'objection de Hugo sur les inégalités lui semble la plus sérieuse. Il se tourne vers Lucie : “ Comment votre permis éviterait-il que seuls ceux qui en ont les moyens puissent monter ? ” Lucie prend une seconde, puis répond d'une voix calme : “ Le permis serait gratuit, à condition qu'on le réserve à l'avance ; en revanche, ceux qui partiraient sans permis paieraient une amende. ”",
        translation:
          "Na fase das perguntas, o senhor Perrin passa a palavra ao júri. O Linu relê as anotações: a objeção do Hugo sobre as desigualdades lhe parece a mais séria. Ele se vira para a Lucie: “Como a sua permissão evitaria que só quem tem dinheiro pudesse subir?” A Lucie pensa um segundo e responde com voz calma: “A permissão seria gratuita, desde que fosse reservada com antecedência; por outro lado, quem subisse sem permissão pagaria uma multa.”",
        choices: [
          { text: "Noter : pour Lucie, le permis ne coûte rien, mais il faut le réserver.", translation: "Anotar: para a Lucie, a permissão não custa nada, mas é preciso reservá-la.", next: "deliberation" },
          {
            text: "Noter : Lucie veut que le permis soit payant, comme une amende.",
            translation: "Anotar: a Lucie quer que a permissão seja paga, como uma multa.",
            wrong: "A Lucie disse que “le permis serait gratuit, à condition qu'on le réserve à l'avance” (seria gratuito, desde que reservado com antecedência). A multa seria só para quem subisse sem permissão: “en revanche” marca essa oposição.",
          },
        ],
      },
      deliberation: {
        emoji: "⚖️",
        text: "Dans la salle des professeurs, les trois jurés comparent leurs notes. Une collègue de Linu penche pour Hugo : “ Il a été plus drôle, plus vivant. ” Linu, lui, a trouvé l'argument de Hugo sur les inégalités excellent, mais la pique contre Lucie l'a dérangé, et c'est Lucie qui a répondu à l'objection la plus difficile. Il doit maintenant justifier son vote devant les autres.",
        translation:
          "Na sala dos professores, os três jurados comparam as notas. Uma colega do Linu pende para o Hugo: “Ele foi mais engraçado, mais vivo.” O Linu achou excelente o argumento do Hugo sobre as desigualdades, mas a alfinetada contra a Lucie o incomodou, e foi a Lucie quem respondeu à objeção mais difícil. Agora ele precisa justificar o voto diante dos outros.",
        choices: [
          {
            text: "“ Bien que je sois plutôt d'accord avec Hugo sur le fond, l'équipe de Lucie a mieux argumenté : ses exemples étaient précis et elle a répondu à l'objection. ”",
            translation: "“Embora eu concorde mais com o Hugo no mérito, o time da Lucie argumentou melhor: os exemplos eram precisos e ela respondeu à objeção.”",
            next: "final_bom",
          },
          { text: "“ Je vote Hugo, parce qu'au fond il a raison. ”", translation: "“Voto no Hugo, porque no fundo ele tem razão.”", next: "final_partial" },
        ],
      },
      final_bom: {
        emoji: "🏅",
        text: "Les deux autres jurés se rangent à l'avis de Linu, et l'équipe de Lucie remporte le concours. Hugo, beau joueur, vient serrer la main de son adversaire et s'excuse pour sa remarque sur Paris. M. Perrin remercie Linu : “ Vous avez jugé les arguments, pas les idées. C'est exactement ce qu'on attend d'un juré. ” Le soir, du balcon de son hôtel, Linu regarde le sommet rougir au coucher du soleil.",
        translation:
          "Os outros dois jurados concordam com o Linu, e o time da Lucie vence o concurso. O Hugo, bom perdedor, vem apertar a mão da adversária e pede desculpas pelo comentário sobre Paris. O senhor Perrin agradece ao Linu: “O senhor julgou os argumentos, não as ideias. É exatamente o que se espera de um jurado.” À noite, da sacada do hotel, o Linu vê o cume ficar vermelho ao pôr do sol.",
        ending: { tone: "bom", title: "Jurado exemplar", message: "Você separou opinião de argumento, puniu o ataque pessoal e reconheceu quem respondeu melhor às objeções." },
      },
      final_injuste: {
        emoji: "😕",
        text: "Linu ne pénalise pas la pique de Hugo, qui remporte le concours de justesse. En quittant l'estrade, Lucie a les larmes aux yeux : on s'est moqué de son origine, et personne n'a rien dit. M. Perrin rappelle doucement à Linu qu'une attaque contre la personne n'est jamais un argument. Linu passe la soirée à ruminer, les yeux fixés sur les glaciers.",
        translation:
          "O Linu não penaliza a alfinetada do Hugo, que vence o concurso por pouco. Ao descer do palco, a Lucie está com lágrimas nos olhos: zombaram da origem dela, e ninguém disse nada. O senhor Perrin lembra ao Linu, com delicadeza, que um ataque à pessoa nunca é argumento. O Linu passa a noite remoendo, com os olhos fixos nas geleiras.",
        ending: { tone: "neutro", title: "Riso fácil", message: "Uma piada contra a pessoa não é argumento: o jurado deveria tê-la penalizado." },
      },
      final_partial: {
        emoji: "🤔",
        text: "“ Il a raison ? s'étonne M. Perrin. Ce n'est pas la question qu'on vous posait. ” Les autres jurés rappellent la consigne : on juge la manière de défendre une idée, pas l'idée elle-même. Linu, penaud, revoit sa grille et doit admettre que son opinion a guidé sa main. Faute d'accord entre les jurés, le concours se termine sur un match nul.",
        translation:
          "“Ele tem razão?”, espanta-se o senhor Perrin. “Não foi isso que perguntamos ao senhor.” Os outros jurados lembram a regra: julga-se a maneira de defender uma ideia, não a ideia em si. O Linu, sem graça, revê a ficha e tem de admitir que a opinião dele guiou a mão. Por falta de acordo entre os jurados, o concurso termina empatado.",
        ending: { tone: "neutro", title: "Juiz e parte", message: "O jurado votou na ideia de que gostava, e não no time que argumentou melhor." },
      },
    },
  },
  // ───────────────────────── C1.1 ─────────────────────────
  {
    id: "fr-h37",
    level: "C1.1",
    cefr: "C1",
    title: "À la cabane à sucre",
    emoji: "🍁",
    summary: "Perto de Montreal, o Linu vai com amigos a uma “cabane à sucre” e descobre o francês do Quebec: “blonde”, “char”, “tuque”, “pantoute” e os palavrões religiosos suavizados.",
    cultural_context:
      "O Quebec produz cerca de 70% do xarope de bordo do mundo. No “temps des sucres”, no fim do inverno, as famílias vão às “cabanes à sucre” comer pratos fartos regados a xarope e a “tire”, xarope fervente derramado na neve. A Carta da Língua Francesa (a “Lei 101”, de 1977) reafirma o francês como a língua oficial do Quebec, onde se popularizou “courriel” no lugar de “e-mail”. Os “sacres”, palavrões quebequenses, vêm do vocabulário da Igreja (“tabarnak”, de “tabernacle”; “câlice”, de “calice”) e têm versões suavizadas, como “tabarnouche”.",
    start: "start",
    glossary: [
      ["ma blonde / mon chum", "minha namorada / meu namorado (ou meu amigo)"],
      ["un char", "um carro (na França, “une voiture”)"],
      ["Tu veux-tu… ?", "Você quer…? (o segundo “tu” só marca a pergunta)"],
      ["il fait frette", "está um frio de rachar"],
      ["une tuque", "um gorro de lã"],
      ["Bienvenue !", "De nada! (resposta a “merci”)"],
      ["pas… pantoute", "nem um pouco, de jeito nenhum"],
      ["gêné", "tímido (na França, “constrangido”)"],
    ],
    nodes: {
      start: {
        emoji: "🚗",
        text: "Samedi matin, à Montréal. Linu attend devant un dépanneur, les pattes gelées, quand un vieux char rouge s'arrête à sa hauteur. Mathieu baisse la vitre : “ Salut, Linu ! Embarque, ma blonde nous attend à la cabane à sucre. Tu veux-tu un café pour la route ? ” À la radio, un violon joue un vieux reel, et le chauffage souffle à fond.",
        translation:
          "Sábado de manhã, em Montreal. O Linu espera na frente de uma lojinha de conveniência, com as patas congeladas, quando um carro velho e vermelho para ao lado dele. O Mathieu abaixa o vidro: “Oi, Linu! Entra, a minha namorada está esperando a gente na cabana do açúcar. Quer um café para a viagem?” No rádio, um violino toca um velho “reel”, e o aquecimento está no máximo.",
        choices: [
          { text: "“ Oui, merci, avec plaisir ! ”", translation: "“Quero, obrigado, com prazer!”", next: "route" },
          {
            text: "“ Ta blonde ? Je savais pas que tu avais une amie aux cheveux blonds. ”",
            translation: "“Sua loira? Não sabia que você tinha uma amiga de cabelo loiro.”",
            wrong: "No Quebec, “ma blonde” é “minha namorada”, seja qual for a cor do cabelo (e “mon chum” é “meu namorado” ou “meu amigo”). E “Tu veux-tu…?” é só uma pergunta: “Você quer…?”.",
          },
        ],
      },
      route: {
        emoji: "❄️",
        text: "Avant de prendre l'autoroute, Mathieu jette un œil à son cellulaire. “ À matin, ma tante m'a envoyé un courriel : il fait frette en maudit dans le bois, moins quinze ! T'as-tu une tuque, au moins ? ” Linu avoue qu'il n'a qu'une petite casquette de baseball. Mathieu éclate de rire et propose de s'arrêter à la prochaine station-service.",
        translation:
          "Antes de pegar a estrada, o Mathieu dá uma olhada no celular. “Hoje de manhã a minha tia me mandou um e-mail: está um frio dos diabos no mato, quinze abaixo de zero! Você tem pelo menos um gorro?” O Linu confessa que só tem um bonezinho de beisebol. O Mathieu cai na risada e propõe parar no próximo posto de gasolina.",
        choices: [
          { text: "“ Bonne idée, arrêtons-nous. ”", translation: "“Boa ideia, vamos parar.”", next: "depanneur" },
          { text: "“ Pas besoin : les pingouins ont jamais frette ! ”", translation: "“Não precisa: pinguim nunca sente frio!”", next: "cabane" },
        ],
      },
      depanneur: {
        emoji: "🧢",
        text: "Au dépanneur de la station-service, Linu trouve une tuque bleu et blanc surmontée d'un gros pompon. Il paie à la caisse et remercie la caissière, qui lui répond avec un grand sourire : “ Bienvenue ! Bonne cabane, là ! ” Linu reste une seconde immobile, la tuque à la main.",
        translation:
          "Na lojinha do posto, o Linu encontra um gorro azul e branco com um pompom enorme. Ele paga no caixa e agradece à caixa, que responde com um sorrisão: “De nada! Boa cabana, hein!” O Linu fica um segundo parado, com o gorro na mão.",
        choices: [
          { text: "Enfiler la tuque et retourner au char.", translation: "Vestir o gorro e voltar para o carro.", next: "cabane" },
          {
            text: "“ Merci, mais je viens pas d'arriver : je repars tout de suite ! ”",
            translation: "“Obrigado, mas eu não acabei de chegar: já estou indo embora!”",
            wrong: "No Quebec, “Bienvenue!” em resposta a “merci” quer dizer “De nada!” (como o inglês “you're welcome”). A caixa não estava dando boas-vindas ao Linu.",
          },
        ],
      },
      cabane: {
        emoji: "🥞",
        text: "La cabane à sucre est une grande maison de bois au milieu des érables, d'où monte une odeur de fumée sucrée. Émilie, la blonde de Mathieu, les accueille devant une longue table déjà couverte de plats : fèves au lard, omelette, jambon, oreilles de crisse, et du sirop partout. “ Mange, mange ! dit-elle à Linu. Après, on va se sucrer le bec avec la tire sur la neige. ” Au bout de la table, son grand-père Gaston lève sa tasse de café en guise de bienvenue.",
        translation:
          "A cabana do açúcar é uma grande casa de madeira no meio dos bordos, de onde sobe um cheiro de fumaça adocicada. A Émilie, namorada do Mathieu, os recebe diante de uma mesa comprida já cheia de pratos: feijão com toucinho, omelete, presunto, torresmo (as “orelhas de Cristo”, nome que vem de um palavrão) e xarope por toda parte. “Come, come!”, diz ela ao Linu. “Depois vamos adoçar o bico com a ‘tire’ na neve.” Na ponta da mesa, o avô dela, Gaston, ergue a xícara de café para dar as boas-vindas.",
        choices: [{ text: "Sortir goûter la tire.", translation: "Sair para provar a “tire”.", next: "tire" }],
      },
      tire: {
        emoji: "🍭",
        text: "Dehors, un employé verse du sirop bouillant sur une longue auge remplie de neige tassée. Linu imite les autres : il pose un bâtonnet sur le ruban doré, l'enroule… et le porte à son bec, qui se retrouve aussitôt collé. “ Tabarnouche ! s'écrie Gaston, mort de rire. Le pingouin a le bec collé ! ” Dans la salle, le violoneux attaque un set carré, et Gaston tend la main à Linu pour l'entraîner vers la piste.",
        translation:
          "Lá fora, um funcionário derrama xarope fervente numa calha comprida cheia de neve compactada. O Linu imita os outros: encosta um palitinho na fita dourada, enrola… e leva ao bico, que na mesma hora fica grudado. “Caramba!”, grita o Gaston, morrendo de rir (“tabarnouche” é a versão suavizada do palavrão “tabarnak”). “O pinguim ficou com o bico colado!” No salão, o violeiro começa um “set carré”, a quadrilha quebequense, e o Gaston estende a mão para levar o Linu para a pista.",
        choices: [
          { text: "Aller danser le set carré avec tout le monde.", translation: "Ir dançar o “set carré” com todo mundo.", next: "danse" },
          { text: "Rester dans son coin : il a trop honte de son bec collé.", translation: "Ficar no canto: está com muita vergonha do bico colado.", next: "final_gene" },
        ],
      },
      danse: {
        emoji: "💃",
        text: "Le câleur crie les figures, les cuillères claquent sur les genoux et les pieds tapent en rythme sur le plancher. Linu ne connaît aucun pas, mais il tourne, salue, change de partenaire et rit plus fort que tout le monde. À la fin, Émilie lui tape sur l'épaule, essoufflée : “ Coudonc, t'es pas gêné pantoute, toi ! ”",
        translation:
          "O marcador grita as figuras, as colheres batem nos joelhos e os pés marcam o ritmo no assoalho. O Linu não conhece nenhum passo, mas gira, cumprimenta, troca de par e ri mais alto que todo mundo. No fim, a Émilie dá um tapinha no ombro dele, ofegante: “Olha só, você não é nem um pouco tímido, hein!”",
        choices: [
          { text: "“ Merci ! C'est ma première cabane, mais sûrement pas ma dernière. ”", translation: "“Obrigado! É a minha primeira cabana, mas com certeza não a última.”", next: "final_bom" },
          {
            text: "“ Tu trouves que je suis trop timide ? Alors je vais danser encore plus ! ”",
            translation: "“Você acha que eu sou tímido demais? Então vou dançar ainda mais!”",
            wrong: "No Quebec, “gêné” quer dizer “tímido”, e “pas… pantoute” quer dizer “nem um pouco”. “T'es pas gêné pantoute” = você não é nada tímido: é um elogio à animação do Linu. (“Coudonc” vem de “écoute donc”: algo como “ora, veja só”.)",
          },
        ],
      },
      final_bom: {
        emoji: "🎉",
        text: "Au retour, dans le char, Linu s'endort, la tuque sur les yeux et un pot de sirop sur les genoux, cadeau de Gaston. Émilie lui a promis de l'emmener à la prochaine veillée de musique traditionnelle. Mathieu, lui, lui apprend à dire “ C'est le fun en tabarnouche ! ”, en jurant que c'est un compliment. Linu répète la phrase jusqu'à Montréal, ravi.",
        translation:
          "Na volta, no carro, o Linu pega no sono, com o gorro caído nos olhos e um pote de xarope no colo, presente do Gaston. A Émilie prometeu levá-lo ao próximo sarau de música tradicional. O Mathieu, por sua vez, ensina o Linu a dizer “Foi divertido pra caramba!”, jurando que é um elogio. O Linu repete a frase até Montreal, encantado.",
        ending: { tone: "bom", title: "Doce até o bico", message: "Você entendeu o francês do Quebec, da “blonde” ao “bienvenue”, e dançou o “set carré” como um quebequense." },
      },
      final_gene: {
        emoji: "🪑",
        text: "Linu reste assis près du poêle, le bec encore collant, à regarder les autres danser. Gaston vient s'asseoir à côté de lui et lui raconte les hivers de son enfance, quand on allait aux sucres en traîneau. C'est une belle soirée, mais Linu regrette un peu de ne pas avoir osé. “ T'es un peu gêné, hein ? ” lui dit Gaston avec bienveillance.",
        translation:
          "O Linu fica sentado perto do fogão a lenha, com o bico ainda grudento, olhando os outros dançarem. O Gaston se senta ao lado dele e conta os invernos da infância, quando se ia à colheita do açúcar de trenó. É uma noite bonita, mas o Linu se arrepende um pouco de não ter se arriscado. “Você é meio tímido, né?”, diz o Gaston, com carinho.",
        ending: { tone: "neutro", title: "Tímido no canto", message: "A timidez (o “gêné” dos quebequenses) venceu: o Linu ouviu boas histórias, mas não dançou." },
      },
    },
  },
  {
    id: "fr-h38",
    level: "C1.1",
    cefr: "C1",
    title: "Dîner à midi",
    emoji: "🍟",
    summary: "Em Bruxelas, o Linu é convidado para “dîner” na casa de um colega belga e descobre que, na Bélgica, as refeições, os números e até o verbo “savoir” funcionam de outro jeito.",
    cultural_context:
      "A Bélgica tem três línguas oficiais: neerlandês, francês e alemão, e Bruxelas é oficialmente bilíngue (francês e neerlandês). No francês da Bélgica, como no da Suíça, diz-se “septante” (70) e “nonante” (90), e as refeições se chamam “déjeuner” (café da manhã), “dîner” (almoço) e “souper” (jantar), como no Quebec. Na Bélgica, “pralines” são bombons de chocolate recheados.",
    start: "start",
    glossary: [
      ["le dîner", "o almoço (na Bélgica); na França, o jantar"],
      ["septante / nonante", "setenta / noventa (na França: soixante-dix / quatre-vingt-dix)"],
      ["une drache", "um toró, uma chuva forte"],
      ["savoir (+ infinitif)", "conseguir, poder (“je ne sais pas venir” = não posso ir)"],
      ["un GSM", "um celular"],
      ["à tantôt", "até daqui a pouco"],
      ["non peut-être !", "claro que sim! (ironia belga)"],
      ["s'il vous plaît", "aqui está (ao entregar algo, na Bélgica)"],
    ],
    nodes: {
      start: {
        emoji: "🌧️",
        text: "Bruxelles, un jeudi de novembre. Une drache soudaine s'abat sur la Grand-Place, et Linu se réfugie sous une arcade avec Julien, son collègue de bureau. “ Quelle drache, hein ! Dis, dimanche, ma mère fait des boulets à la liégeoise. Tu viens dîner chez nous ? On passe à table à midi et demi. ”",
        translation:
          "Bruxelas, uma quinta-feira de novembro. Um toró repentino desaba sobre a Grand-Place, e o Linu se abriga debaixo de uma arcada com o Julien, colega de escritório. “Que toró, hein! Escuta, no domingo a minha mãe vai fazer almôndegas à moda de Liège. Quer almoçar lá em casa? A gente senta à mesa ao meio-dia e meia.”",
        choices: [
          { text: "“ Avec plaisir ! Je serai là à midi et demi. ”", translation: "“Com prazer! Estarei lá ao meio-dia e meia.”", next: "pralines" },
          {
            text: "“ Super, je viendrai vers vingt heures, alors, pour le dîner ! ”",
            translation: "“Ótimo, então chego lá pelas oito da noite, para o jantar!”",
            wrong: "Na Bélgica, “dîner” é o almoço (o jantar é “souper”). E o Julien disse com todas as letras: “On passe à table à midi et demi”, ao meio-dia e meia.",
          },
        ],
      },
      pralines: {
        emoji: "🍫",
        text: "Le samedi, Linu entre dans une chocolaterie du Sablon pour acheter un cadeau à la mère de Julien. Il a quatre-vingts euros en poche, pas un centime de plus. La vendeuse lui montre deux ballotins de pralines : “ Le grand est à nonante euros, le moyen à septante. ” Linu les regarde longuement, puis compte ses billets.",
        translation:
          "No sábado, o Linu entra numa chocolateria do Sablon para comprar um presente para a mãe do Julien. Ele tem oitenta euros no bolso, nem um centavo a mais. A vendedora mostra duas caixas de bombons: “A grande custa noventa euros; a média, setenta.” O Linu olha as duas demoradamente e depois conta as notas.",
        choices: [
          { text: "“ Le moyen, s'il vous plaît. ”", translation: "“A média, por favor.”", next: "message" },
          {
            text: "“ Le grand, s'il vous plaît : avec mes quatre-vingts euros, ça passe. ”",
            translation: "“A grande, por favor: com os meus oitenta euros, dá.”",
            wrong: "“Nonante” = 90, e o Linu só tem 80 euros. A caixa média custa “septante”, 70: essa ele pode comprar.",
          },
        ],
      },
      message: {
        emoji: "📱",
        text: "La vendeuse lui tend le paquet en disant “ S'il vous plaît ! ”, comme si c'était elle qui demandait quelque chose : en Belgique, c'est ainsi qu'on dit “ tenez ” ou “ voici ”. Le dimanche matin, le GSM de Linu vibre : “ Désolé, je ne sais pas venir te chercher à la gare, ma voiture est en panne. Prends le tram, à tantôt ! ” Linu relit le message deux fois.",
        translation:
          "A vendedora entrega o pacote dizendo “Por favor!”, como se fosse ela quem estivesse pedindo alguma coisa: na Bélgica, é assim que se diz “tome” ou “aqui está”. No domingo de manhã, o celular do Linu vibra: “Desculpa, não posso te buscar na estação, o meu carro quebrou. Pega o bonde, até daqui a pouco!” O Linu relê a mensagem duas vezes.",
        choices: [
          { text: "Prendre le tram tout seul jusque chez Julien.", translation: "Pegar o bonde sozinho até a casa do Julien.", next: "tram" },
          {
            text: "“ Julien ne sait pas où se trouve la gare ? Il faut lui expliquer le chemin. ”",
            translation: "“O Julien não sabe onde fica a estação? Preciso explicar o caminho para ele.”",
            wrong: "No francês da Bélgica, “savoir” + infinitivo muitas vezes quer dizer “poder, conseguir”: “je ne sais pas venir te chercher” = não posso ir te buscar (o carro quebrou). E “à tantôt” = até daqui a pouco.",
          },
        ],
      },
      tram: {
        emoji: "🚋",
        text: "Dans le tram, Linu montre l'adresse à une dame âgée, qui chausse ses lunettes. “ Ah, c'est tout près de chez ma sœur ! Vous descendez au troisième arrêt, et c'est à nonante mètres, sur la gauche. Vous ne savez pas le rater, allez ! ” Linu la remercie, et elle lui souhaite bon appétit, puisqu'il est bientôt midi.",
        translation:
          "No bonde, o Linu mostra o endereço a uma senhora idosa, que põe os óculos. “Ah, é pertinho da casa da minha irmã! O senhor desce no terceiro ponto, e fica a noventa metros, à esquerda. Não tem como errar, vai!” O Linu agradece, e ela lhe deseja bom apetite, já que é quase meio-dia.",
        choices: [{ text: "Sonner chez Julien.", translation: "Tocar a campainha na casa do Julien.", next: "table" }],
      },
      table: {
        emoji: "🍽️",
        text: "Chez Julien, toute la famille est déjà à table, et les boulets baignent dans une sauce brune au sirop de Liège. La mère de Julien ouvre le ballotin et pousse un petit cri de joie. Le frère de Julien, Arnaud, un grand blagueur, lance à Linu : “ Alors, t'as trouvé facilement ? ” Autour de la table, tout le monde attend sa réponse, amusé.",
        translation:
          "Na casa do Julien, a família toda já está à mesa, e as almôndegas nadam num molho escuro feito com xarope de Liège. A mãe do Julien abre a caixa de bombons e solta um gritinho de alegria. O irmão do Julien, Arnaud, um grande brincalhão, pergunta ao Linu: “E aí, achou fácil?” Em volta da mesa, todos esperam a resposta, achando graça.",
        choices: [
          { text: "“ Non peut-être ! Le tram m'a déposé presque devant la porte. ”", translation: "“Claro que sim! O bonde me deixou quase na porta.”", next: "final_bom" },
          { text: "Répondre en ajoutant “ une fois ” à chaque phrase, pour faire belge.", translation: "Responder acrescentando “une fois” a cada frase, para parecer belga.", next: "final_cliche" },
        ],
      },
      final_bom: {
        emoji: "🎉",
        text: "Arnaud éclate de rire : “ Non peut-être ! Il parle déjà belge, le pingouin ! ” La mère de Julien ressert Linu trois fois, et le ballotin fait le tour de la table au dessert. On lui apprend à compter jusqu'à nonante-neuf, puis à dire “ à tantôt ” au lieu de “ à plus tard ”. En partant, Linu promet de revenir pour le souper, cette fois.",
        translation:
          "O Arnaud cai na risada: “Claro que sim! Ele já fala belga, o pinguim!” A mãe do Julien serve o Linu três vezes, e a caixa de bombons dá a volta na mesa na hora da sobremesa. Ensinam o Linu a contar até noventa e nove e a dizer “à tantôt” em vez de “à plus tard”. Na saída, o Linu promete voltar para o jantar, desta vez.",
        ending: { tone: "bom", title: "Belga honorário", message: "Você entendeu o “dîner” ao meio-dia, o “nonante”, o “savoir” belga e até a ironia do “non peut-être”." },
      },
      final_cliche: {
        emoji: "😬",
        text: "Au troisième “ une fois ”, Arnaud lève les yeux au ciel : “ Ça, c'est ce que les Français croient qu'on dit tout le temps ! ” Tout le monde rit, mais Linu sent qu'il a un peu agacé la famille. Julien lui explique gentiment que l'expression existe, mais qu'on l'entend bien moins que dans les blagues. Le repas reste chaleureux, et Linu se promet d'écouter avant d'imiter.",
        translation:
          "No terceiro “une fois”, o Arnaud revira os olhos: “Isso é o que os franceses acham que a gente diz o tempo todo!” Todo mundo ri, mas o Linu sente que irritou um pouco a família. O Julien explica com gentileza que a expressão existe, mas que se ouve muito menos do que nas piadas. O almoço continua caloroso, e o Linu promete a si mesmo ouvir antes de imitar.",
        ending: { tone: "neutro", title: "Clichê de piada", message: "Imitar o sotaque pelo estereótipo raramente agrada: o francês da Bélgica é bem mais rico que as piadas." },
      },
    },
  },
  {
    id: "fr-h39",
    level: "C1.1",
    cefr: "C1",
    title: "Ndank ndank",
    emoji: "🍵",
    summary: "Em Dakar, o Linu mora com a família da Awa, aprende as primeiras palavras em uolofe e descobre o francês do Senegal, do “c'est cadeau” à “essencerie”.",
    cultural_context:
      "No Senegal, o francês é a língua oficial, mas o uolofe (wolof) é a língua mais falada no dia a dia, e o francês local tem palavras próprias, como “essencerie” (posto de gasolina). O “attaya”, chá verde com hortelã servido em três rodadas, é um ritual de convivência, e o “thiéboudienne” (ceebu jën), arroz com peixe, foi inscrito em 2021 no Patrimônio Cultural Imaterial da UNESCO. O país se orgulha da “teranga”, a hospitalidade senegalesa.",
    start: "start",
    glossary: [
      ["Nanga def ?", "Tudo bem? (uolofe)"],
      ["Maa ngi fi rekk.", "Estou bem (literalmente “estou aqui, só”; uolofe)"],
      ["Jërëjëf !", "Obrigado! (uolofe)"],
      ["c'est cadeau", "é de graça, é por conta da casa"],
      ["le boutiquier", "o dono da vendinha do bairro"],
      ["ndank ndank", "devagarinho, com calma (uolofe)"],
      ["une essencerie", "um posto de gasolina (no Senegal)"],
      ["la teranga", "a hospitalidade senegalesa"],
    ],
    nodes: {
      start: {
        emoji: "🌅",
        text: "Dakar, quartier de la Médina, huit heures du matin. Dans la cour de la maison, Awa étend du linge et accueille Linu avec un grand sourire : “ Nanga def, Linu ? ” Cela fait une semaine qu'il habite chez sa famille, et il apprend chaque jour quelques mots de wolof. Il se souvient de la réponse que lui a apprise le petit frère d'Awa.",
        translation:
          "Dakar, bairro da Medina, oito da manhã. No quintal da casa, a Awa estende roupa e recebe o Linu com um sorrisão: “Nanga def, Linu?” Faz uma semana que ele mora com a família dela, e todo dia aprende algumas palavras de uolofe. Ele se lembra da resposta que o irmão caçula da Awa lhe ensinou.",
        choices: [
          { text: "“ Maa ngi fi rekk ! ”", translation: "“Estou bem!”", next: "boutique" },
          {
            text: "“ Je m'appelle Linu, et toi ? ”",
            translation: "“Eu me chamo Linu, e você?”",
            wrong: "“Nanga def?” é o cumprimento do dia a dia em uolofe: quer dizer “Tudo bem?”, e não “Como você se chama?”. A resposta é “Maa ngi fi rekk”, “estou bem”.",
          },
        ],
      },
      boutique: {
        emoji: "🏪",
        text: "La grand-mère d'Awa, Mame Coumba, l'appelle depuis la véranda : “ Mon fils, va chez le boutiquier m'acheter du sucre et du thé vert pour l'attaya. Et ne cours pas, hein : ndank ndank. ” Au coin de la rue, le boutiquier, assis derrière son comptoir, reconnaît Linu tout de suite. “ Ah, c'est toi, le pingouin de chez Mame Coumba ! Le sucre, c'est cadeau aujourd'hui. Dis-lui bien bonjour de ma part. ”",
        translation:
          "A avó da Awa, Mame Coumba, chama o Linu da varanda: “Meu filho, vá à vendinha comprar açúcar e chá verde para o attaya. E não corra, hein: devagarinho.” Na esquina, o dono da vendinha, sentado atrás do balcão, reconhece o Linu na hora. “Ah, é você o pinguim da casa da Mame Coumba! O açúcar hoje é por conta da casa. Mande um bom-dia para ela da minha parte.”",
        choices: [
          { text: "“ Jërëjëf ! C'est très gentil. ”", translation: "“Obrigado! É muita gentileza.”", next: "attaya" },
          {
            text: "“ Un cadeau ? Alors je dois vous offrir quelque chose en échange ? ”",
            translation: "“Um presente? Então eu tenho que lhe dar alguma coisa em troca?”",
            wrong: "No francês da África (e também no francês familiar da França), “c'est cadeau” quer dizer “é de graça, é por conta da casa”. O comerciante está sendo generoso: basta agradecer, “jërëjëf”.",
          },
        ],
      },
      attaya: {
        emoji: "🍵",
        text: "Dans la cour, Modou, le frère d'Awa, prépare l'attaya sur un petit réchaud. Il verse le thé de très haut, d'un verre à l'autre, jusqu'à ce que la mousse soit parfaite, et explique à Linu que chaque verre est plus sucré que le précédent. “ L'attaya, ça ne se boit pas pressé : on a le temps de parler ”, dit-il en riant. Entre deux verres, il propose à Linu de l'accompagner au combat de lutte de l'après-midi ; Mame Coumba, elle, voudrait lui apprendre à cuisiner le thiéboudienne.",
        translation:
          "No quintal, o Modou, irmão da Awa, prepara o attaya num fogareiro. Ele despeja o chá de bem alto, de um copo para o outro, até a espuma ficar perfeita, e explica ao Linu que cada copo é mais doce que o anterior. “Attaya não se bebe com pressa: dá tempo de conversar”, diz ele, rindo. Entre um copo e outro, ele convida o Linu para ir com ele à luta da tarde; a Mame Coumba, por sua vez, quer ensiná-lo a cozinhar o thiéboudienne.",
        choices: [
          { text: "Aller voir la lutte avec Modou.", translation: "Ir ver a luta com o Modou.", next: "lutte" },
          { text: "Rester apprendre le thiéboudienne avec Mame Coumba.", translation: "Ficar para aprender o thiéboudienne com a Mame Coumba.", next: "cuisine" },
        ],
      },
      lutte: {
        emoji: "🤼",
        text: "En route vers l'arène, le taxi s'arrête dans une essencerie pour faire le plein, et le chauffeur en profite pour saluer tout le quartier. À l'arène, les tambours résonnent, et les lutteurs entrent en dansant, couverts de gris-gris. Le combat ne dure que quelques minutes, mais la foule hurle comme s'il s'agissait d'une finale de Coupe du monde. Au moment de repartir, Modou regarde sa montre : “ On rentre ndank ndank, on sera là pour le déjeuner. ”",
        translation:
          "A caminho da arena, o táxi para num posto de gasolina para abastecer, e o motorista aproveita para cumprimentar o bairro inteiro. Na arena, os tambores ressoam, e os lutadores entram dançando, cobertos de amuletos. A luta dura só alguns minutos, mas a multidão grita como se fosse uma final de Copa do Mundo. Na hora de ir embora, o Modou olha o relógio: “Vamos voltando com calma, chegamos a tempo do almoço.”",
        choices: [{ text: "Rentrer à la maison pour le repas.", translation: "Voltar para casa para a refeição.", next: "repas" }],
      },
      cuisine: {
        emoji: "🐟",
        text: "Dans la cuisine, Mame Coumba farcit les morceaux de poisson d'une pâte verte au persil, à l'ail et au piment, qu'on appelle le rof. Elle montre à Linu comment faire cuire le riz dans le bouillon de poisson et de légumes, pour qu'il en prenne toute la saveur. “ Le thiéboudienne, ça ne se fait pas en courant, dit-elle. C'est comme la vie : ndank ndank. ” Linu sort de la cuisine les yeux qui piquent, mais fier comme un chef.",
        translation:
          "Na cozinha, a Mame Coumba recheia os pedaços de peixe com uma pasta verde de salsinha, alho e pimenta, que se chama “rof”. Ela mostra ao Linu como cozinhar o arroz no caldo de peixe e legumes, para que ele pegue todo o sabor. “Thiéboudienne não se faz correndo”, diz ela. “É como a vida: devagarinho.” O Linu sai da cozinha com os olhos ardendo, mas orgulhoso como um chef.",
        choices: [{ text: "Aider à servir le repas.", translation: "Ajudar a servir a refeição.", next: "repas" }],
      },
      repas: {
        emoji: "🥘",
        text: "À l'heure du déjeuner, toute la famille s'assoit autour d'un grand plat commun posé sur une natte. Mame Coumba explique à Linu qu'on mange dans sa propre part du plat, celle qui est devant soi, et avec la main droite. Modou pousse vers lui les meilleurs morceaux de poisson : c'est ça, la teranga. Tous les regards se tournent vers l'invité, à qui revient l'honneur de commencer.",
        translation:
          "Na hora do almoço, a família toda se senta em volta de uma grande travessa comum posta sobre uma esteira. A Mame Coumba explica ao Linu que cada um come da sua parte do prato, a que está na sua frente, e com a mão direita. O Modou empurra para ele os melhores pedaços de peixe: isso é a teranga. Todos os olhares se voltam para o convidado, que tem a honra de começar.",
        choices: [
          { text: "Manger avec la main droite, dans la part qui est devant lui.", translation: "Comer com a mão direita, da parte que está na frente dele.", next: "final_bom" },
          { text: "Plonger la main gauche au milieu du plat pour attraper le plus gros morceau.", translation: "Enfiar a mão esquerda no meio da travessa para pegar o maior pedaço.", next: "final_gaffe" },
        ],
      },
      final_bom: {
        emoji: "🎉",
        text: "Mame Coumba hoche la tête, satisfaite : “ Toi, tu es un vrai Sénégalais maintenant. ” Après le repas, on refait de l'attaya, et Linu raconte sa journée en mélangeant le français et ses dix mots de wolof, ce qui fait rire toute la cour. Le soir, Awa lui offre un petit cahier pour noter les nouvelles expressions. En première page, il écrit : “ Teranga ”.",
        translation:
          "A Mame Coumba acena com a cabeça, satisfeita: “Você agora é um senegalês de verdade.” Depois da refeição, preparam attaya de novo, e o Linu conta o seu dia misturando o francês com as suas dez palavras de uolofe, o que faz o quintal inteiro rir. À noite, a Awa lhe dá um caderninho para anotar as expressões novas. Na primeira página, ele escreve: “Teranga”.",
        ending: { tone: "bom", title: "Um senegalês de verdade", message: "Você entendeu o francês do Senegal, arriscou o uolofe e respeitou as regras da mesa: a teranga retribuída." },
      },
      final_gaffe: {
        emoji: "🙊",
        text: "Un silence gêné tombe sur la natte, et le petit frère d'Awa pouffe de rire. Mame Coumba, patiente, prend la main de Linu et la repose doucement devant lui : “ Ici, on mange avec la droite, mon fils, et chacun dans sa part. ” Linu, confus, s'excuse en wolof, et tout le monde finit par rire avec lui. Il n'est pas près d'oublier cette leçon.",
        translation:
          "Um silêncio constrangido cai sobre a esteira, e o irmão caçula da Awa segura o riso. A Mame Coumba, paciente, pega a mão do Linu e a põe de volta, com delicadeza, na frente dele: “Aqui se come com a direita, meu filho, e cada um na sua parte.” O Linu, sem graça, pede desculpas em uolofe, e todo mundo acaba rindo com ele. Essa lição ele não vai esquecer tão cedo.",
        ending: { tone: "neutro", title: "Mão errada", message: "A Mame Coumba tinha explicado: come-se com a mão direita, da parte que está na sua frente." },
      },
    },
  },
  // ───────────────────────── C1.2 ─────────────────────────
  {
    id: "fr-h40",
    level: "C1.2",
    cefr: "C1",
    title: "Coup de vent sur les Lumières",
    emoji: "🕯️",
    summary: "Na redação de um jornal de Lyon, o Linu estagia na véspera da Fête des Lumières e aprende a nominalizar manchetes e a desconfiar do condicional jornalístico.",
    cultural_context:
      "A Fête des Lumières de Lyon nasceu em 8 de dezembro de 1852: a inauguração de uma estátua da Virgem na colina de Fourvière, prevista para setembro, fora adiada por causa de uma cheia; no dia marcado, uma tempestade ameaçou a cerimônia, mas o céu abriu e os moradores puseram velas nas janelas. A tradição dos “lumignons” continua, e hoje a festa dura vários dias, com espetáculos de luz pela cidade.",
    start: "start",
    glossary: [
      ["la nominalisation", "a nominalização (“on annule” → “annulation”)"],
      ["la une", "a primeira página do jornal"],
      ["une dépêche", "um despacho de agência de notícias"],
      ["le conditionnel journalistique", "o condicional que marca informação não confirmada (“serait annulé” = teria sido cancelado)"],
      ["le maintien", "a manutenção: o evento continua de pé"],
      ["sous réserve de", "dependendo de, salvo mudança de"],
      ["le bouclage", "o fechamento da edição"],
      ["un rectificatif", "uma errata, uma correção publicada"],
    ],
    nodes: {
      start: {
        emoji: "📰",
        text: "Lyon, le 7 décembre, dans la salle de rédaction d'un quotidien régional. La cheffe d'édition, Mme Garnier, pose un café devant Linu, stagiaire depuis une semaine. “ Il me faut des titres pour la une de demain. Rappel : pas de verbe conjugué, on nominalise. ‘Les organisateurs prolongent la fête’ devient ‘Prolongation de la fête’. ” Elle repart aussitôt vers son bureau, le téléphone à l'oreille.",
        translation:
          "Lyon, 7 de dezembro, na redação de um jornal diário regional. A editora-chefe, senhora Garnier, põe um café na frente do Linu, estagiário há uma semana. “Preciso de manchetes para a primeira página de amanhã. Lembrete: nada de verbo conjugado, a gente nominaliza. ‘Os organizadores prolongam a festa’ vira ‘Prolongamento da festa’.” Ela volta logo para a sua mesa, com o telefone no ouvido.",
        choices: [
          { text: "Proposer : “ Affluence record attendue pour la Fête des Lumières ”.", translation: "Propor: “Público recorde esperado para a Fête des Lumières”.", next: "depeche" },
          {
            text: "Proposer : “ Les gens vont venir très nombreux, c'est sûr et certain ”.",
            translation: "Propor: “O pessoal vai vir em peso, com certeza absoluta”.",
            wrong: "A senhora Garnier pediu manchetes sem verbo conjugado, nominalizadas (“pas de verbe conjugué, on nominalise”). Além disso, “c'est sûr et certain” é oral demais para um jornal: “Affluence record attendue” diz o mesmo em estilo de manchete.",
          },
        ],
      },
      depeche: {
        emoji: "📠",
        text: "Vers quinze heures, une dépêche s'affiche sur l'écran de Linu : “ Selon une source proche de l'organisation, le spectacle de la place des Terreaux serait annulé en raison des rafales de vent prévues ce soir. ” Mme Garnier se penche par-dessus son épaule. “ Attention : c'est au conditionnel. Tant que l'information n'est pas confirmée, on ne l'affirme pas. ” Toute la rédaction semble attendre la réaction du stagiaire.",
        translation:
          "Por volta das três da tarde, uma dépêche aparece na tela do Linu: “Segundo uma fonte próxima da organização, o espetáculo da praça des Terreaux teria sido cancelado por causa das rajadas de vento previstas para esta noite.” A senhora Garnier se debruça por cima do ombro dele. “Atenção: está no condicional. Enquanto a informação não for confirmada, não se afirma.” A redação inteira parece esperar a reação do estagiário.",
        choices: [
          { text: "Écrire “ Le spectacle des Terreaux pourrait être annulé ” et appeler le service de presse.", translation: "Escrever “O espetáculo des Terreaux pode ser cancelado” e ligar para a assessoria de imprensa.", next: "appel" },
          { text: "Titrer tout de suite “ Annulation du spectacle des Terreaux ”, pour être les premiers.", translation: "Publicar já a manchete “Cancelamento do espetáculo des Terreaux”, para sair na frente.", next: "final_intox" },
          {
            text: "“ Puisque la dépêche confirme l'annulation, on peut l'annoncer. ”",
            translation: "“Já que a dépêche confirma o cancelamento, podemos anunciar.”",
            wrong: "“Serait annulé” está no condicional jornalístico: indica informação não confirmada, atribuída a uma fonte (“selon une source”). A dépêche não confirma nada, e a chefe acabou de avisar: “on ne l'affirme pas”.",
          },
        ],
      },
      appel: {
        emoji: "☎️",
        text: "Au bout du fil, la chargée de communication de la fête parle vite, dans un français très administratif. “ Nous confirmons le maintien du spectacle des Terreaux, sous réserve de l'évolution des conditions météorologiques. Une décision définitive sera prise à dix-sept heures, à l'issue d'une réunion avec la préfecture. ” Linu raccroche et relit ses notes, le cœur battant.",
        translation:
          "Do outro lado da linha, a assessora de comunicação da festa fala rápido, num francês muito administrativo. “Confirmamos a manutenção do espetáculo des Terreaux, salvo mudança das condições meteorológicas. Uma decisão definitiva será tomada às dezessete horas, ao fim de uma reunião com a préfecture (a representação do Estado no departamento).” O Linu desliga e relê as anotações, com o coração disparado.",
        choices: [
          { text: "Noter : spectacle maintenu pour l'instant, décision définitive à 17 heures.", translation: "Anotar: espetáculo mantido por enquanto, decisão definitiva às 17 horas.", next: "terrain" },
          {
            text: "Noter : spectacle définitivement annulé, prévenir Mme Garnier.",
            translation: "Anotar: espetáculo definitivamente cancelado, avisar a senhora Garnier.",
            wrong: "“Le maintien du spectacle” = o espetáculo está mantido. “Sous réserve de” indica só uma condição (dependendo do tempo), e a decisão definitiva só sai às 17 horas. Nada foi cancelado.",
          },
        ],
      },
      terrain: {
        emoji: "🏮",
        text: "En attendant, Mme Garnier l'envoie dans le Vieux-Lyon recueillir des témoignages. Au pied de la colline de Fourvière, une vieille dame dispose des lumignons sur le rebord de sa fenêtre, comme le faisait sa grand-mère. “ Le 8 décembre, c'est d'abord une fête de famille, vous savez, pas un spectacle pour touristes. ” Linu note la phrase mot pour mot : elle fera une belle citation dans son article.",
        translation:
          "Enquanto isso, a senhora Garnier o manda ao Vieux-Lyon para colher depoimentos. Ao pé da colina de Fourvière, uma senhora idosa arruma velinhas no parapeito da janela, como fazia a avó dela. “O 8 de dezembro é antes de tudo uma festa de família, sabe, não um espetáculo para turistas.” O Linu anota a frase palavra por palavra: vai dar uma bela citação na matéria.",
        choices: [{ text: "Rentrer à la rédaction pour le bouclage.", translation: "Voltar à redação para o fechamento.", next: "bouclage" }],
      },
      bouclage: {
        emoji: "⏰",
        text: "Dix-sept heures dix : le communiqué tombe enfin, et le spectacle est maintenu. Mme Garnier donne dix minutes à Linu pour proposer le titre de l'article, qui partira à l'imprimerie à dix-huit heures. “ Court, informatif, nominalisé. Et n'oublie pas le vent : c'était ça, l'info de la journée. ” Linu tape deux versions et les lui montre.",
        translation:
          "Cinco e dez da tarde: o comunicado finalmente sai, e o espetáculo está mantido. A senhora Garnier dá dez minutos ao Linu para propor o título da matéria, que vai para a gráfica às seis. “Curto, informativo, nominalizado. E não esqueça o vento: essa foi a notícia do dia.” O Linu digita duas versões e mostra a ela.",
        choices: [
          { text: "“ Maintien du spectacle des Terreaux malgré les rafales ”", translation: "“Espetáculo des Terreaux mantido apesar das rajadas”", next: "final_bom" },
          {
            text: "“ Le spectacle des Terreaux a finalement été maintenu par les organisateurs, qui ont décidé de ne pas l'annuler malgré le vent qui était prévu ”",
            translation: "“O espetáculo des Terreaux acabou sendo mantido pelos organizadores, que decidiram não cancelá-lo apesar do vento que estava previsto”",
            next: "final_long",
          },
        ],
      },
      final_bom: {
        emoji: "🎉",
        text: "Mme Garnier relit, hoche la tête et envoie le titre sans changer une virgule. Le lendemain matin, Linu achète trois exemplaires du journal au kiosque, et la citation de la vieille dame figure en bonne place. Le soir, place des Terreaux, les façades s'illuminent sous un ciel enfin calme. Pour la première fois, Linu regarde le spectacle en pensant à tous ceux qui ont travaillé pour l'annoncer.",
        translation:
          "A senhora Garnier relê, aprova com a cabeça e manda o título sem mudar uma vírgula. Na manhã seguinte, o Linu compra três exemplares do jornal na banca, e a citação da senhora idosa aparece em destaque. À noite, na praça des Terreaux, as fachadas se iluminam sob um céu finalmente calmo. Pela primeira vez, o Linu assiste ao espetáculo pensando em todos que trabalharam para anunciá-lo.",
        ending: { tone: "bom", title: "Furo sem barriga", message: "Você nominalizou as manchetes, respeitou o condicional jornalístico e só afirmou o que estava confirmado." },
      },
      final_intox: {
        emoji: "📉",
        text: "Le titre est mis en ligne à quinze heures cinq, et les partages s'enchaînent. À dix-sept heures, la préfecture confirme… que le spectacle est maintenu. La rédaction doit publier un rectificatif, et Mme Garnier passe la soirée au téléphone avec des lecteurs furieux. “ Au conditionnel, on vérifie ; à l'indicatif, on affirme ”, rappelle-t-elle à Linu, sans colère, mais sans sourire.",
        translation:
          "A manchete vai ao ar às três e cinco, e os compartilhamentos se multiplicam. Às cinco da tarde, a préfecture confirma… que o espetáculo está mantido. A redação tem de publicar uma errata, e a senhora Garnier passa a noite ao telefone com leitores furiosos. “No condicional, a gente verifica; no indicativo, a gente afirma”, lembra ela ao Linu, sem raiva, mas sem sorrir.",
        ending: { tone: "neutro", title: "Barriga", message: "O condicional jornalístico avisava que a informação não estava confirmada. Publicar primeiro não vale publicar errado." },
      },
      final_long: {
        emoji: "✂️",
        text: "Mme Garnier compte les mots et soupire : “ Plus de vingt mots ? C'est un paragraphe, pas un titre ! ” Elle coupe, raye et réécrit elle-même : “ Maintien du spectacle des Terreaux malgré les rafales ”. Le journal part à l'heure, mais le titre n'est pas celui de Linu. Il comprend qu'en une chaque mot doit se battre pour sa place.",
        translation:
          "A senhora Garnier conta as palavras e suspira: “Mais de vinte palavras? Isso é um parágrafo, não um título!” Ela corta, risca e reescreve ela mesma: “Espetáculo des Terreaux mantido apesar das rajadas”. O jornal sai na hora, mas o título não é o do Linu. Ele entende que, na primeira página, cada palavra tem de lutar pelo seu lugar.",
        ending: { tone: "neutro", title: "Título-parágrafo", message: "A informação estava certa, mas faltou a nominalização: título de jornal é curto e sem verbo conjugado." },
      },
    },
  },
  {
    id: "fr-h41",
    level: "C1.2",
    cefr: "C1",
    title: "Chercheuses et chercheurs",
    emoji: "🎓",
    summary: "Na Universidade de Montpellier, o Linu aprende as regras da escrita acadêmica e precisa redigir, com a comissão de um colóquio dividida, uma chamada de trabalhos que agrade aos dois lados do debate sobre a escrita inclusiva.",
    cultural_context:
      "A faculdade de medicina de Montpellier, com estatutos de 1220, é uma das mais antigas do mundo ainda em atividade; François Rabelais se matriculou nela em 1530, e o Jardin des plantes da cidade, fundado em 1593, é o jardim botânico mais antigo da França. Em francês, o Linu é um “manchot”: “pingouin” designa, a rigor, aves do hemisfério norte, como a torda-mergulheira. A escrita inclusiva divide a França: a Academia Francesa a criticou duramente em 2017, e uma circular do governo do mesmo ano a afastou dos textos oficiais, enquanto seus defensores a veem como um meio de dar visibilidade às mulheres.",
    start: "start",
    glossary: [
      ["le nous de modestie", "o “nós” usado por um único autor em textos acadêmicos"],
      ["il semblerait que", "parece que (forma prudente)"],
      ["étayer", "fundamentar, apoiar com provas"],
      ["l'écriture inclusive", "a escrita inclusiva"],
      ["le point médian", "o ponto mediano (chercheur·es)"],
      ["un mot épicène", "uma palavra que serve aos dois gêneros (“élève”, “personne”)"],
      ["le masculin générique", "o masculino genérico (“les chercheurs” para todos)"],
      ["un appel à communications", "uma chamada de trabalhos"],
    ],
    nodes: {
      start: {
        emoji: "📑",
        text: "Montpellier, dans un vieux bureau de l'université aux murs couverts de livres. La professeure Delmas rend à Linu le résumé de son mémoire, couvert d'annotations au crayon. “ Votre sujet est passionnant, mais le ‘je’ est proscrit : écrivez ‘nous’, même si vous êtes seul. Et nuancez : ‘il semblerait que’, ‘nos résultats suggèrent que’. Une affirmation non étayée n'a pas sa place dans un article scientifique. ” Elle ajoute avec un sourire : “ Au fait, en français, vous êtes un manchot, pas un pingouin. ”",
        translation:
          "Montpellier, num velho gabinete da universidade de paredes cobertas de livros. A professora Delmas devolve ao Linu o resumo da dissertação, cheio de anotações a lápis. “O seu tema é fascinante, mas o ‘eu’ está proibido: escreva ‘nós’, mesmo que seja o único autor. E nuance: ‘parece que’, ‘nossos resultados sugerem que’. Uma afirmação sem fundamento não tem lugar num artigo científico.” Ela acrescenta, sorrindo: “Aliás, em francês, você é um ‘manchot’, não um ‘pingouin’.”",
        choices: [
          {
            text: "Corriger : “ Nos résultats suggèrent que les manchots reconnaissent la voix de leurs petits. ”",
            translation: "Corrigir: “Nossos resultados sugerem que os pinguins reconhecem a voz dos filhotes.”",
            next: "comite",
          },
          {
            text: "Corriger : “ Je prouve définitivement que tous les manchots reconnaissent leurs petits. ”",
            translation: "Corrigir: “Eu provo definitivamente que todos os pinguins reconhecem os filhotes.”",
            wrong: "A professora pediu três coisas: trocar “je” por “nous”, nuançar (“nos résultats suggèrent que”) e não afirmar nada sem provas. “Je prouve définitivement que tous…” faz exatamente o contrário.",
          },
        ],
      },
      comite: {
        emoji: "👥",
        text: "Le lendemain, Linu, secrétaire du comité d'organisation d'un colloque de doctorants, doit rédiger l'appel à communications. La réunion s'échauffe vite. Inès défend le point médian : “ L'écriture inclusive rend les femmes visibles ; or, elles sont nombreuses dans notre laboratoire, et le masculin les efface. ” Arnaud n'est pas d'accord : “ Je suis pour l'égalité, mais le point médian gêne la lecture, en particulier pour les personnes dyslexiques ou aveugles qui utilisent un lecteur d'écran. ”",
        translation:
          "No dia seguinte, o Linu, secretário da comissão organizadora de um colóquio de doutorandos, precisa redigir a chamada de trabalhos. A reunião esquenta rápido. A Inès defende o ponto mediano: “A escrita inclusiva torna as mulheres visíveis; ora, elas são numerosas no nosso laboratório, e o masculino as apaga.” O Arnaud discorda: “Sou a favor da igualdade, mas o ponto mediano atrapalha a leitura, sobretudo para pessoas com dislexia ou cegas que usam leitor de tela.”",
        choices: [
          { text: "Résumer : Inès veut rendre les femmes visibles ; Arnaud s'inquiète de la lisibilité.", translation: "Resumir: a Inès quer tornar as mulheres visíveis; o Arnaud se preocupa com a legibilidade.", next: "redaction" },
          {
            text: "Résumer : Arnaud est contre l'égalité entre les femmes et les hommes.",
            translation: "Resumir: o Arnaud é contra a igualdade entre mulheres e homens.",
            wrong: "O Arnaud disse o contrário: “Je suis pour l'égalité” (sou a favor da igualdade). A objeção dele é de legibilidade: o ponto mediano atrapalharia a leitura de pessoas com dislexia ou que usam leitor de tela.",
          },
        ],
      },
      redaction: {
        emoji: "✍️",
        text: "Le comité charge Linu de proposer la première phrase de l'appel. Il pèse chaque mot, car les deux camps le liront à la loupe. Trois versions s'affichent sur son écran, et il doit en envoyer une au groupe avant midi.",
        translation:
          "A comissão encarrega o Linu de propor a primeira frase da chamada. Ele pesa cada palavra, porque os dois lados vão lê-la com lupa. Três versões aparecem na tela, e ele precisa mandar uma para o grupo antes do meio-dia.",
        choices: [
          { text: "“ Les chercheur·es et doctorant·es sont invité·es à soumettre une proposition. ”", translation: "“Os/as pesquisadores/as e doutorandos/as estão convidados/as a enviar uma proposta.”", next: "final_point" },
          {
            text: "“ Toute personne intéressée, chercheuse ou chercheur, doctorante ou doctorant, est invitée à soumettre une proposition. ”",
            translation: "“Toda pessoa interessada, pesquisadora ou pesquisador, doutoranda ou doutorando, está convidada a enviar uma proposta.”",
            next: "delmas",
          },
          { text: "“ Les chercheurs et doctorants sont invités à soumettre une proposition. ”", translation: "“Os pesquisadores e doutorandos estão convidados a enviar uma proposta.”", next: "final_masculin" },
        ],
      },
      delmas: {
        emoji: "🔍",
        text: "La phrase fait consensus : Inès y voit les femmes nommées, Arnaud une lecture fluide. Avant l'envoi, la professeure Delmas relit l'appel et en resserre le style : “ Date limite de soumission : 15 mars ” ; “ Les propositions, d'une longueur maximale de trois cents mots, sont à adresser au comité ”. “ Nominalisations et présent de vérité générale, dit-elle : c'est la langue de la recherche. ” Puis elle invite Linu à fêter ça au Jardin des plantes, tout proche.",
        translation:
          "A frase é consenso: a Inès vê as mulheres nomeadas; o Arnaud, uma leitura fluida. Antes do envio, a professora Delmas relê a chamada e enxuga o estilo: “Prazo final de envio: 15 de março”; “As propostas, com no máximo trezentas palavras, devem ser enviadas à comissão”. “Nominalizações e presente atemporal”, diz ela: “essa é a língua da pesquisa.” Depois convida o Linu para comemorar no Jardin des plantes, ali pertinho.",
        choices: [{ text: "Accepter l'invitation.", translation: "Aceitar o convite.", next: "final_bom" }],
      },
      final_bom: {
        emoji: "🌿",
        text: "Sous les arbres du Jardin des plantes, le plus ancien jardin botanique de France, la professeure raconte à Linu que Rabelais a étudié la médecine à quelques rues d'ici. Le lendemain, l'appel à communications part avec la signature de tout le comité, sans une seule objection. Trois semaines plus tard, quarante propositions sont arrivées, de toute l'Europe. Linu en dresse la liste avec un soin tout académique, au “ nous ” de modestie.",
        translation:
          "Debaixo das árvores do Jardin des plantes, o jardim botânico mais antigo da França, a professora conta ao Linu que Rabelais estudou medicina a poucas ruas dali. No dia seguinte, a chamada de trabalhos sai com a assinatura da comissão inteira, sem nenhuma objeção. Três semanas depois, já chegaram quarenta propostas, de toda a Europa. O Linu faz a lista com um cuidado bem acadêmico, no “nós” de modéstia.",
        ending: { tone: "bom", title: "Consenso na comissão", message: "Você escreveu em estilo acadêmico, resumiu as duas posições com fidelidade e encontrou uma formulação que toda a comissão aceitou." },
      },
      final_point: {
        emoji: "🔸",
        text: "Inès applaudit la proposition, mais Arnaud refuse de la signer et demande un vote. Le comité se divise en deux camps égaux, et la discussion dure jusqu'au soir. L'appel finit par partir avec le point médian, mais sans la signature d'Arnaud. Linu se dit que, sur ce sujet, chaque choix a ses défenseurs, et qu'il aurait peut-être fallu chercher d'abord une formule commune.",
        translation:
          "A Inès aplaude a proposta, mas o Arnaud se recusa a assiná-la e pede uma votação. A comissão se divide em dois lados iguais, e a discussão vai até a noite. A chamada acaba saindo com o ponto mediano, mas sem a assinatura do Arnaud. O Linu pensa que, nesse assunto, cada escolha tem os seus defensores, e que talvez tivesse sido melhor buscar primeiro uma fórmula comum.",
        ending: { tone: "neutro", title: "Comissão dividida", message: "O ponto mediano tem defensores convictos e críticos também: sem uma formulação comum, a comissão rachou." },
      },
      final_masculin: {
        emoji: "🔹",
        text: "Arnaud approuve, mais Inès fait remarquer que la moitié des personnes présentes ne se sentent pas nommées. La discussion reprend de plus belle, et la réunion se termine sans décision. Le soir, Linu relit les deux arguments et comprend qu'aucun des deux camps n'est de mauvaise foi. Il reprendra sa copie le lendemain, avec une idée : chercher des mots qui conviennent à tout le monde.",
        translation:
          "O Arnaud aprova, mas a Inès observa que metade das pessoas presentes não se sente nomeada. A discussão recomeça com mais força, e a reunião termina sem decisão. À noite, o Linu relê os dois argumentos e entende que nenhum dos lados está de má-fé. Vai retomar o texto no dia seguinte, com uma ideia: procurar palavras que sirvam para todo mundo.",
        ending: { tone: "neutro", title: "Sem acordo", message: "O masculino genérico é a norma tradicional, mas parte da comissão não se sentiu incluída: faltou uma formulação comum." },
      },
    },
  },
  {
    id: "fr-h42",
    level: "C1.2",
    cefr: "C1",
    title: "Mise en demeure",
    emoji: "⚖️",
    summary: "Em Rennes, o antigo proprietário do Linu se recusa a devolver o depósito-caução, e o Linu precisa decifrar o francês jurídico com a ajuda de uma estudante de direito.",
    cultural_context:
      "O Parlamento da Bretanha, em Rennes, foi construído no século XVII e abriga hoje a Corte de Apelação; quase destruído por um incêndio em 1994, foi restaurado. Pela lei de 6 de julho de 1989, o proprietário deve devolver o depósito-caução (“dépôt de garantie”) em até um mês se o estado do imóvel na saída for igual ao da entrada, e em até dois meses se não for; em caso de atraso, a quantia devida aumenta 10% do aluguel mensal por mês de atraso iniciado.",
    start: "start",
    glossary: [
      ["le bailleur / le locataire", "o locador / o inquilino"],
      ["le dépôt de garantie", "o depósito-caução"],
      ["l'état des lieux", "a vistoria (de entrada e de saída)"],
      ["une mise en demeure", "uma notificação formal para cumprir uma obrigação"],
      ["à défaut de", "na falta de; “à défaut” = caso contrário"],
      ["à compter de", "a partir de"],
      ["nonobstant", "não obstante, apesar de"],
      ["il appartient à… de", "cabe a… (fazer algo)"],
    ],
    nodes: {
      start: {
        emoji: "✉️",
        text: "Rennes, un matin pluvieux de mars. Six semaines après avoir rendu les clés de son studio, Linu reçoit enfin une lettre de son ancien propriétaire, M. Le Goff. “ Monsieur, compte tenu de l'état du logement constaté après votre départ, je me vois contraint de conserver l'intégralité du dépôt de garantie. ” Pourtant, l'état des lieux de sortie, signé par les deux parties, est identique à celui d'entrée.",
        translation:
          "Rennes, uma manhã chuvosa de março. Seis semanas depois de entregar as chaves da sua quitinete, o Linu finalmente recebe uma carta do antigo proprietário, o senhor Le Goff. “Prezado senhor, tendo em vista o estado do imóvel constatado após a sua saída, vejo-me obrigado a reter a integralidade do depósito-caução.” No entanto, a vistoria de saída, assinada pelas duas partes, é idêntica à de entrada.",
        choices: [
          { text: "Demander conseil au point d'accès au droit de la ville.", translation: "Pedir orientação no serviço gratuito de acesso ao direito da cidade.", next: "maelle" },
          { text: "Appeler M. Le Goff et lui dire ses quatre vérités.", translation: "Ligar para o senhor Le Goff e lhe dizer umas verdades.", next: "final_dispute" },
          {
            text: "“ Bonne nouvelle : M. Le Goff va me rendre toute ma caution. ”",
            translation: "“Boa notícia: o senhor Le Goff vai me devolver a caução inteira.”",
            wrong: "“Conserver l'intégralité du dépôt de garantie” = reter o depósito inteiro. O proprietário não vai devolver nada: é o contrário do que o Linu esperava.",
          },
        ],
      },
      maelle: {
        emoji: "📚",
        text: "Au point d'accès au droit, une étudiante en droit, Maëlle, lit la lettre en fronçant les sourcils. “ L'article 22 de la loi du 6 juillet 1989 est clair : lorsque l'état des lieux de sortie est conforme à celui d'entrée, le dépôt de garantie doit être restitué dans un délai maximal d'un mois à compter de la remise des clés. À défaut, le montant dû est majoré d'une somme égale à dix pour cent du loyer mensuel pour chaque période mensuelle commencée en retard. ” Elle pose le texte de loi sur la table : “ Alors, qu'en concluez-vous ? ”",
        translation:
          "No serviço de acesso ao direito, uma estudante de direito, Maëlle, lê a carta franzindo a testa. “O artigo 22 da lei de 6 de julho de 1989 é claro: quando a vistoria de saída é igual à de entrada, o depósito-caução deve ser devolvido num prazo máximo de um mês a contar da entrega das chaves. Caso contrário, a quantia devida é acrescida de um valor igual a dez por cento do aluguel mensal para cada período mensal de atraso iniciado.” Ela põe o texto da lei na mesa: “Então, o que o senhor conclui?”",
        choices: [
          {
            text: "“ Mon état des lieux est conforme : il aurait dû me la rendre il y a deux semaines, et il me doit une majoration. ”",
            translation: "“A minha vistoria está conforme: ele deveria ter devolvido há duas semanas, e me deve um acréscimo.”",
            next: "courrier",
          },
          {
            text: "“ Il a deux mois pour me la rendre, donc il n'est pas encore en retard. ”",
            translation: "“Ele tem dois meses para devolver, então ainda não está atrasado.”",
            wrong: "O prazo de dois meses vale quando o estado de saída difere do de entrada. Como a vistoria de saída do Linu é “conforme” à de entrada, o prazo é de um mês: seis semanas depois, o proprietário já está atrasado.",
          },
        ],
      },
      courrier: {
        emoji: "🖋️",
        text: "Maëlle aide Linu à rédiger une mise en demeure dans les règles de l'art. “ Par la présente, je vous mets en demeure de me restituer le dépôt de garantie, majoré conformément à l'article 22 de la loi du 6 juillet 1989, dans un délai de huit jours à compter de la réception du présent courrier. À défaut, je me verrai dans l'obligation de saisir la commission départementale de conciliation. ” Linu relit la phrase trois fois : jamais il n'a rien écrit d'aussi solennel.",
        translation:
          "A Maëlle ajuda o Linu a redigir uma notificação formal como manda o figurino. “Pela presente, notifico-o a me restituir o depósito-caução, acrescido nos termos do artigo 22 da lei de 6 de julho de 1989, no prazo de oito dias a contar do recebimento desta carta. Caso contrário, ver-me-ei obrigado a recorrer à comissão departamental de conciliação.” O Linu relê a frase três vezes: nunca escreveu nada tão solene.",
        choices: [
          { text: "L'envoyer en lettre recommandée avec accusé de réception.", translation: "Mandar por carta registrada com aviso de recebimento.", next: "reponse" },
          { text: "L'envoyer par SMS, c'est plus rapide.", translation: "Mandar por SMS, é mais rápido.", next: "final_sms" },
        ],
      },
      reponse: {
        emoji: "📨",
        text: "Dix jours plus tard, M. Le Goff répond, sur un ton nettement plus prudent. Il propose de restituer le dépôt, “ déduction faite de cinquante euros de frais de nettoyage, nonobstant la conformité de l'état des lieux ”. Maëlle sourit : “ Autrement dit, il reconnaît que le logement était en bon état, mais il veut quand même garder cinquante euros. ” Elle laisse Linu décider.",
        translation:
          "Dez dias depois, o senhor Le Goff responde, num tom bem mais cauteloso. Propõe devolver o depósito, “descontados cinquenta euros de despesas de limpeza, não obstante a conformidade da vistoria”. A Maëlle sorri: “Em outras palavras, ele reconhece que o imóvel estava em bom estado, mas quer ficar com cinquenta euros mesmo assim.” Ela deixa o Linu decidir.",
        choices: [
          { text: "Accepter : cinquante euros, ça ne vaut pas la peine de se battre.", translation: "Aceitar: cinquenta euros não valem a briga.", next: "final_compromis" },
          { text: "Refuser et saisir la commission de conciliation.", translation: "Recusar e recorrer à comissão de conciliação.", next: "conciliation" },
        ],
      },
      conciliation: {
        emoji: "🏛️",
        text: "La commission se réunit dans un bâtiment administratif, non loin du parlement de Bretagne. La conciliatrice écoute les deux parties, puis s'adresse à M. Le Goff : “ Il appartient au bailleur de justifier toute retenue sur le dépôt de garantie. Faute de preuve, la retenue n'est pas fondée, et la majoration légale s'applique. ” M. Le Goff consulte ses papiers, soupire et finit par signer un accord.",
        translation:
          "A comissão se reúne num prédio administrativo, perto do Parlamento da Bretanha. A conciliadora ouve as duas partes e depois se dirige ao senhor Le Goff: “Cabe ao locador justificar qualquer retenção sobre o depósito-caução. Na falta de prova, a retenção não tem fundamento, e o acréscimo legal se aplica.” O senhor Le Goff consulta os papéis, suspira e acaba assinando um acordo.",
        choices: [{ text: "Signer l'accord à son tour.", translation: "Assinar o acordo também.", next: "final_bom" }],
      },
      final_bom: {
        emoji: "🎉",
        text: "Une semaine plus tard, Linu reçoit un virement : le dépôt de garantie intégral, plus la majoration légale. Pour remercier Maëlle, il l'invite à manger une galette-saucisse au marché des Lices, le samedi matin. “ Vous feriez un bon juriste ”, lui dit-elle. “ Nonobstant votre bec ”, ajoute-t-elle en riant.",
        translation:
          "Uma semana depois, o Linu recebe uma transferência: o depósito-caução inteiro, mais o acréscimo legal. Para agradecer à Maëlle, ele a convida para comer uma “galette-saucisse” (crepe de trigo-sarraceno com linguiça) no mercado des Lices, no sábado de manhã. “O senhor daria um bom jurista”, diz ela. “Não obstante o seu bico”, acrescenta, rindo.",
        ending: { tone: "bom", title: "Direito garantido", message: "Você entendeu o texto da lei, seguiu o procedimento formal e recuperou o depósito com o acréscimo." },
      },
      final_compromis: {
        emoji: "🤝",
        text: "Linu accepte, et le virement arrive quelques jours plus tard, amputé de cinquante euros. Maëlle respecte sa décision, mais lui fait remarquer qu'il a renoncé à la fois à cette somme et à la majoration. “ Enfin, un mauvais arrangement vaut mieux qu'un bon procès, comme dit le proverbe ”, concède-t-elle. Linu, soulagé d'en avoir fini, se dit que la paix a parfois un prix.",
        translation:
          "O Linu aceita, e a transferência chega alguns dias depois, com cinquenta euros a menos. A Maëlle respeita a decisão, mas observa que ele abriu mão ao mesmo tempo dessa quantia e do acréscimo. “Enfim, mais vale um mau acordo do que uma boa demanda, como diz o provérbio”, concede ela. O Linu, aliviado por ter acabado, pensa que a paz às vezes tem preço.",
        ending: { tone: "neutro", title: "Mais vale um mau acordo", message: "O Linu recuperou quase tudo, mas abriu mão de um direito que a lei lhe garantia." },
      },
      final_sms: {
        emoji: "📵",
        text: "M. Le Goff ne répond jamais au SMS. Quand Linu retourne voir Maëlle, elle soupire : “ Un SMS n'a pas la même valeur qu'une lettre recommandée : impossible de prouver la date de réception. ” Il faut tout recommencer, et Linu perd encore trois semaines. Il comprend qu'en droit la forme compte autant que le fond.",
        translation:
          "O senhor Le Goff nunca responde ao SMS. Quando o Linu volta a procurar a Maëlle, ela suspira: “Um SMS não tem o mesmo valor que uma carta registrada: é impossível provar a data de recebimento.” É preciso recomeçar tudo, e o Linu perde mais três semanas. Ele entende que, no direito, a forma conta tanto quanto o conteúdo.",
        ending: { tone: "neutro", title: "Sem prova", message: "Uma notificação formal precisa de prova de recebimento: a carta registrada com aviso de recebimento existe para isso." },
      },
      final_dispute: {
        emoji: "📞",
        text: "Au téléphone, le ton monte vite : Linu s'emporte, M. Le Goff raccroche. Les jours passent sans aucune nouvelle, et Linu n'a aucune trace écrite de sa réclamation. Des semaines plus tard, une voisine lui parle du point d'accès au droit, mais il a déjà perdu beaucoup de temps. Il retient la leçon : la colère ne remplace pas une lettre bien écrite.",
        translation:
          "Ao telefone, o tom sobe rápido: o Linu perde a paciência, o senhor Le Goff desliga. Os dias passam sem notícia nenhuma, e o Linu não tem nenhum registro escrito da reclamação. Semanas depois, uma vizinha lhe fala do serviço de acesso ao direito, mas ele já perdeu muito tempo. Ele aprende a lição: a raiva não substitui uma carta bem escrita.",
        ending: { tone: "neutro", title: "Bate-boca", message: "Sem nada por escrito, a reclamação não deixou rastro. No direito francês, o caminho é a notificação formal." },
      },
    },
  },
  // ───────────────────────── C2 ─────────────────────────
  {
    id: "fr-h43",
    level: "C2",
    cefr: "C2",
    title: "Le gueuloir de Croisset",
    emoji: "🖋️",
    summary: "Em Croisset, perto de Rouen, o Linu participa de uma oficina de escrita no pavilhão de Flaubert e aprende, à força de gritar as suas frases, a buscar a palavra exata.",
    cultural_context:
      "Gustave Flaubert nasceu em Rouen em 1821, no hospital onde o pai era cirurgião-chefe, e escreveu a maior parte da obra em Croisset, à beira do Sena; da casa só resta hoje um pequeno pavilhão. Ele testava as frases lendo-as aos berros, no que chamava de “gueuloir”. “Madame Bovary” (1857) lhe valeu um processo por ofensa à moral pública, do qual foi absolvido; Flaubert foi também o mestre literário de Maupassant.",
    start: "start",
    glossary: [
      ["le gueuloir", "o “berratório” de Flaubert, onde ele gritava as frases para testá-las"],
      ["le mot juste", "a palavra exata"],
      ["il entra / ils se turent", "ele entrou / eles se calaram (passé simple)"],
      ["que vous vous tussiez", "que vocês se calassem (imparfait du subjonctif de “se taire”)"],
      ["il eût fallu", "teria sido preciso (forma literária de “il aurait fallu”)"],
      ["remettre sur le métier", "retomar um trabalho para aperfeiçoá-lo (lit. “recolocar no tear”)"],
      ["une rature", "uma rasura"],
      ["retrancher", "cortar, suprimir"],
    ],
    nodes: {
      start: {
        emoji: "🌫️",
        text: "Ce fut par un matin de brume que Linu descendit du bus à Croisset, au bord de la Seine, à quelques kilomètres de Rouen. De la grande maison où Flaubert avait passé la plus grande partie de sa vie, il ne restait qu'un pavillon au bord de l'eau, que l'on eût dit oublié par le temps. Une dizaine d'apprentis écrivains l'y attendaient déjà, autour d'une femme aux cheveux gris, Mme Lecœur, qui animait l'atelier. “ Flaubert passait parfois une semaine entière sur une seule page, dit-elle en guise de bienvenue ; nous n'aurons qu'une journée, mais nous tâcherons d'en être dignes. ” Puis elle distribua à chacun une feuille sur laquelle était écrite une seule phrase, qu'il faudrait récrire jusqu'à ce qu'elle fût parfaite.",
        translation:
          "Foi numa manhã de névoa que o Linu desceu do ônibus em Croisset, à beira do Sena, a poucos quilômetros de Rouen. Da grande casa onde Flaubert passara a maior parte da vida, restava apenas um pavilhão à beira d'água, que se diria esquecido pelo tempo. Uma dezena de aprendizes de escritor já o esperava ali, em volta de uma mulher de cabelos grisalhos, a senhora Lecœur, que conduzia a oficina. “Flaubert às vezes passava uma semana inteira numa única página”, disse ela à guisa de boas-vindas; “teremos só um dia, mas tentaremos estar à altura.” Depois distribuiu a cada um uma folha na qual estava escrita uma única frase, que seria preciso reescrever até que ficasse perfeita.",
        choices: [
          { text: "Lire la phrase à voix basse, pour l'apprivoiser.", translation: "Ler a frase em voz baixa, para se familiarizar com ela.", next: "phrase" },
          {
            text: "Recopier la phrase telle quelle : Mme Lecœur a dit qu'elle était déjà parfaite.",
            translation: "Copiar a frase do jeito que está: a senhora Lecœur disse que ela já era perfeita.",
            wrong: "“Qu'il faudrait récrire jusqu'à ce qu'elle fût parfaite” = que seria preciso reescrever até que ficasse perfeita. “Fût” é o imparfait du subjonctif de “être”, exigido por “jusqu'à ce que”: a frase ainda não é perfeita, é o objetivo do exercício.",
          },
        ],
      },
      phrase: {
        emoji: "📄",
        text: "Sur la feuille de Linu, on lisait : “ Le soleil se couchait lentement sur la rivière qui coulait doucement, et les arbres qui étaient au bord de l'eau se reflétaient dans l'eau calme. ” Mme Lecœur se pencha par-dessus son épaule et sourit avec une indulgence un peu cruelle. “ Deux adverbes en -ment, deux relatives qui se suivent, et l'eau répétée deux fois : Flaubert eût hurlé. ” Elle lui rappela que l'auteur de Madame Bovary traquait les répétitions et les assonances avec la patience d'un chasseur à l'affût. “ Cherchez le mot juste, ajouta-t-elle, et n'ayez pas peur de retrancher. ”",
        translation:
          "Na folha do Linu se lia: “O sol se punha lentamente sobre o rio que corria suavemente, e as árvores que estavam à beira d'água se refletiam na água calma.” A senhora Lecœur se debruçou por cima do ombro dele e sorriu com uma indulgência um tanto cruel. “Dois advérbios em -mente, duas orações relativas seguidas e a água repetida duas vezes: Flaubert teria urrado.” Lembrou-lhe que o autor de Madame Bovary caçava as repetições e as assonâncias com a paciência de um caçador de tocaia. “Procure a palavra exata”, acrescentou, “e não tenha medo de cortar.”",
        choices: [
          { text: "Couper, resserrer, supprimer les répétitions.", translation: "Cortar, enxugar, eliminar as repetições.", next: "gueuloir" },
          { text: "Ajouter des adjectifs, pour que la phrase paraisse plus littéraire.", translation: "Acrescentar adjetivos, para que a frase pareça mais literária.", next: "final_pompeux" },
        ],
      },
      gueuloir: {
        emoji: "📢",
        text: "À midi, Mme Lecœur conduisit le groupe dans l'allée qui longe le pavillon, face au fleuve. “ C'est ici que nous allons gueuler, annonça-t-elle ; Flaubert éprouvait chaque phrase à pleine voix, et celles qui ne résistaient pas à l'épreuve, il les jetait. ” Linu, qui avait réduit la sienne à “ Le soleil se couchait sur la Seine, et les saules y buvaient leur ombre ”, hésita longtemps avant de l'offrir au vent. Quand enfin il la cria, un pêcheur, sur l'autre rive, leva la tête, étonné, et un héron s'envola. Mme Lecœur, qui l'avait écouté les yeux fermés, ne dit rien pendant un long moment.",
        translation:
          "Ao meio-dia, a senhora Lecœur levou o grupo à alameda que margeia o pavilhão, de frente para o rio. “É aqui que vamos berrar”, anunciou; “Flaubert testava cada frase em voz alta, e as que não resistiam à prova ele jogava fora.” O Linu, que tinha reduzido a sua a “O sol se punha sobre o Sena, e os salgueiros bebiam ali a sua sombra”, hesitou muito antes de entregá-la ao vento. Quando enfim a gritou, um pescador, na outra margem, ergueu a cabeça, espantado, e uma garça levantou voo. A senhora Lecœur, que o escutara de olhos fechados, não disse nada por um longo momento.",
        choices: [{ text: "Attendre son verdict en silence.", translation: "Esperar o veredicto dela em silêncio.", next: "verdict" }],
      },
      verdict: {
        emoji: "🧐",
        text: "“ C'est mieux, dit-elle enfin, beaucoup mieux ; mais il eût fallu que vous vous tussiez un instant avant le dernier mot, pour que l'image eût le temps de naître. ” Plusieurs apprentis échangèrent un regard perplexe devant ces subjonctifs d'un autre siècle, que la vieille dame maniait avec une coquetterie évidente. Elle leur expliqua en riant que, dans une conversation d'aujourd'hui, on dirait simplement : “ Il aurait fallu vous taire une seconde. ” Puis elle cita Boileau, qui l'avait écrit près de deux siècles avant Flaubert : “ Vingt fois sur le métier remettez votre ouvrage. ” Chacun pouvait, conclut-elle, reprendre sa phrase au gueuloir, ou la considérer comme achevée.",
        translation:
          "“Está melhor”, disse ela enfim, “muito melhor; mas teria sido preciso que o senhor se calasse um instante antes da última palavra, para que a imagem tivesse tempo de nascer.” Vários aprendizes trocaram um olhar perplexo diante daqueles subjuntivos de outro século, que a velha senhora manejava com evidente vaidade. Ela explicou, rindo, que numa conversa de hoje se diria simplesmente: “Devia ter ficado calado um segundo.” Depois citou Boileau, que o escrevera quase dois séculos antes de Flaubert: “Vinte vezes ao tear voltai a vossa obra.” Cada um podia, concluiu, retomar a sua frase no berratório ou considerá-la terminada.",
        choices: [
          { text: "Remettre la phrase sur le métier et la crier une seconde fois.", translation: "Voltar a frase ao tear e gritá-la uma segunda vez.", next: "seconde" },
          { text: "Déclarer la phrase achevée et aller déjeuner.", translation: "Declarar a frase terminada e ir almoçar.", next: "final_moyen" },
          {
            text: "Crier la phrase plus fort encore, d'une seule traite, sans jamais s'arrêter.",
            translation: "Gritar a frase ainda mais alto, de uma vez só, sem parar nunca.",
            wrong: "“Il eût fallu que vous vous tussiez un instant avant le dernier mot” = teria sido preciso que o senhor se calasse um instante antes da última palavra (“tussiez” é o imparfait du subjonctif de “se taire”). Ela pediu uma pausa, não mais volume.",
          },
        ],
      },
      seconde: {
        emoji: "🌅",
        text: "Linu retourna au bord de l'eau, attendit que le héron se fût posé de nouveau, et reprit sa phrase à pleine voix. Cette fois, il laissa passer un silence avant le dernier mot, et “ ombre ” tomba sur la Seine comme une pierre dans un puits. Les apprentis, qui riaient encore un peu le matin, se turent tout à fait. Mme Lecœur rouvrit les yeux et, sans un mot, lui tendit un vieux livre de poche, corné à la première page. Linu lut à haute voix la première ligne de Madame Bovary : “ Nous étions à l'Étude, quand le Proviseur entra, suivi d'un nouveau habillé en bourgeois et d'un garçon de classe qui portait un grand pupitre. ”",
        translation:
          "O Linu voltou à beira d'água, esperou que a garça tivesse pousado de novo e retomou a frase a plenos pulmões. Desta vez, deixou passar um silêncio antes da última palavra, e “sombra” caiu sobre o Sena como uma pedra num poço. Os aprendizes, que de manhã ainda riam um pouco, calaram-se por completo. A senhora Lecœur reabriu os olhos e, sem uma palavra, estendeu-lhe um velho livro de bolso, com a primeira página dobrada. O Linu leu em voz alta a primeira linha de Madame Bovary: “Estávamos na sala de estudos quando o diretor entrou, seguido de um novato vestido à paisana e de um servente que carregava uma grande carteira.”",
        choices: [
          { text: "Remarquer que le roman s'ouvre sur un “ nous ” qui ne dit pas son nom.", translation: "Observar que o romance começa com um “nós” que não diz quem é.", next: "final_bom" },
          { text: "Refermer le livre et remercier poliment.", translation: "Fechar o livro e agradecer educadamente.", next: "final_moyen" },
        ],
      },
      final_bom: {
        emoji: "🎉",
        text: "“ Vous avez l'œil ”, murmura Mme Lecœur, ravie : ce “ nous ” de camarades de classe qui ouvre le roman s'efface au bout de quelques pages, et l'on ne sait jamais tout à fait qui il était. Le soir, dans le bus qui le ramenait vers Rouen, Linu relut sa phrase une dernière fois et n'y changea rien, ce qui, pour un disciple de Flaubert, tenait du miracle. En passant devant l'Hôtel-Dieu, où l'écrivain était né, il crut entendre une voix gueuler quelque part dans la nuit. Il sourit : c'était sans doute la sienne, qui n'en avait pas fini avec les mots. Le lendemain, il ouvrit un carnet neuf, en tête duquel il écrivit : “ Le mot juste, et rien d'autre. ”",
        translation:
          "“O senhor tem olho”, murmurou a senhora Lecœur, encantada: aquele “nós” de colegas de classe que abre o romance se apaga depois de poucas páginas, e nunca se sabe muito bem quem ele era. À noite, no ônibus que o levava de volta a Rouen, o Linu releu a sua frase uma última vez e não mudou nada, o que, para um discípulo de Flaubert, era quase um milagre. Ao passar diante do Hôtel-Dieu, onde o escritor nascera, pareceu-lhe ouvir uma voz berrando em algum lugar na noite. Sorriu: era sem dúvida a sua, que ainda não tinha acabado com as palavras. No dia seguinte, abriu um caderno novo, no alto do qual escreveu: “A palavra exata, e nada mais.”",
        ending: { tone: "bom", title: "A palavra exata", message: "Você entendeu os subjuntivos literários, cortou o supérfluo, respeitou o silêncio antes da última palavra e leu Flaubert com olhos de escritor." },
      },
      final_moyen: {
        emoji: "🍽️",
        text: "Linu rejoignit les autres dans une auberge voisine, où l'on servait un canard à la rouennaise. La conversation roula sur Flaubert, sur Maupassant, dont il fut le maître, et sur les procès intentés aux écrivains. Pourtant, tout l'après-midi, Linu sentit que sa phrase n'était pas tout à fait finie, comme une porte restée entrouverte. Le soir, Mme Lecœur le salua avec gentillesse, mais sans ce petit éclat dans les yeux qu'elle avait eu pour d'autres. Dans le bus du retour, il reprit la feuille et la ratura jusqu'à Rouen.",
        translation:
          "O Linu juntou-se aos outros numa estalagem vizinha, onde se servia pato à moda de Rouen. A conversa girou em torno de Flaubert, de Maupassant, de quem ele foi mestre, e dos processos movidos contra escritores. No entanto, a tarde toda, o Linu sentiu que a sua frase não estava completamente terminada, como uma porta que ficou entreaberta. À noite, a senhora Lecœur se despediu dele com gentileza, mas sem aquele brilho nos olhos que tivera para outros. No ônibus de volta, ele pegou a folha e foi rasurando até Rouen.",
        ending: { tone: "neutro", title: "Porta entreaberta", message: "A frase ficou boa, mas parou antes da última lapidação: Boileau e Flaubert pediriam mais uma volta ao tear." },
      },
      final_pompeux: {
        emoji: "🦚",
        text: "Linu ajouta des adjectifs, puis des adverbes, puis une comparaison avec des cygnes, si bien que sa phrase finit par occuper six lignes. Au gueuloir, il s'essouffla avant la moitié, et Mme Lecœur dut lui faire signe de reprendre haleine. “ Chez Flaubert, lui dit-elle doucement, on n'aurait pas gardé la moitié de ces mots. ” Les autres apprentis ne rirent pas, ce qui fut peut-être pire. Linu repartit le soir avec une leçon qu'il n'oublierait plus : en littérature, on n'ajoute jamais aussi bien qu'on retranche.",
        translation:
          "O Linu acrescentou adjetivos, depois advérbios, depois uma comparação com cisnes, tanto que a frase acabou ocupando seis linhas. No berratório, ficou sem fôlego antes da metade, e a senhora Lecœur teve de lhe fazer sinal para recuperar o ar. “Com Flaubert”, disse-lhe ela com doçura, “não se teria guardado nem metade dessas palavras.” Os outros aprendizes não riram, o que talvez tenha sido pior. O Linu foi embora à noite com uma lição que nunca mais esqueceria: na literatura, nunca se acrescenta tão bem quanto se corta.",
        ending: { tone: "neutro", title: "Frase-pavão", message: "A senhora Lecœur pediu para cortar e procurar a palavra exata; enfeitar a frase foi o caminho oposto." },
      },
    },
  },
  {
    id: "fr-h44",
    level: "C2",
    cefr: "C2",
    title: "Demain, dès l'aube",
    emoji: "🌹",
    summary: "Na casa de Victor Hugo, na Place des Vosges, o Linu ajuda uma velha atriz a preparar a leitura de um poema célebre e descobre, verso a verso, o que ele esconde.",
    cultural_context:
      "Victor Hugo morou de 1832 a 1848 no número 6 da Place des Vosges, em Paris, hoje um museu. Sua filha Léopoldine morreu afogada no Sena, em Villequier, em 1843, poucos meses depois de se casar; o poema “Demain, dès l'aube…”, publicado em “Les Contemplations” (1856), é dedicado a ela. Quando Hugo morreu, em 1885, seu corpo foi levado ao Panthéon diante de uma multidão imensa.",
    start: "start",
    glossary: [
      ["dès l'aube", "desde o amanhecer"],
      ["blanchir", "clarear, branquear"],
      ["je ne puis", "não posso (forma literária de “je ne peux”)"],
      ["le houx / la bruyère", "o azevinho / a urze"],
      ["souffler (un texte)", "soprar o texto, como o ponto no teatro"],
      ["elle récita / il se tut", "ela recitou / ele se calou (passé simple)"],
      ["qu'on lui laissât", "que lhe deixassem (imparfait du subjonctif)"],
      ["À cœur vaillant rien d'impossible", "para um coração valente nada é impossível (provérbio)"],
    ],
    nodes: {
      start: {
        emoji: "🏛️",
        text: "La pluie tombait depuis le matin sur la place des Vosges, et les arcades de brique rose ruisselaient comme les joues d'un enfant qui a trop pleuré. Linu, qui s'y était abrité, poussa presque par hasard la porte de la maison où Victor Hugo avait vécu seize ans. Dans un salon tendu de damas rouge, une vieille dame très droite, les mains croisées sur une canne, répétait à mi-voix des vers qu'il ne saisissait pas. Elle se présenta : Madeleine Aubry, comédienne retraitée, qui devait lire le soir même un poème de Hugo devant les amis du musée. “ Ma mémoire me joue des tours, soupira-t-elle ; accepteriez-vous, jeune homme, de me souffler le texte, caché derrière un paravent ? ”",
        translation:
          "A chuva caía desde a manhã sobre a Place des Vosges, e as arcadas de tijolo rosado escorriam como as bochechas de uma criança que chorou demais. O Linu, que se abrigara ali, empurrou quase por acaso a porta da casa onde Victor Hugo vivera dezesseis anos. Num salão forrado de damasco vermelho, uma senhora idosa, muito ereta, com as mãos cruzadas sobre uma bengala, repetia a meia-voz uns versos que ele não entendia. Ela se apresentou: Madeleine Aubry, atriz aposentada, que naquela mesma noite leria um poema de Hugo para os amigos do museu. “A minha memória me prega peças”, suspirou; “o senhor aceitaria, meu jovem, soprar-me o texto, escondido atrás de um biombo?”",
        choices: [
          { text: "“ Avec joie, madame : dites-moi seulement de quel poème il s'agit. ”", translation: "“Com prazer, senhora: diga-me só de que poema se trata.”", next: "poeme" },
          {
            text: "Accepter de lire le poème à sa place, ce soir, devant tout le monde.",
            translation: "Aceitar ler o poema no lugar dela, à noite, diante de todos.",
            wrong: "“Souffler le texte” é soprar o texto, como o ponto no teatro: ela quer que o Linu, escondido atrás de um biombo, a ajude a lembrar os versos, e não que leia no lugar dela.",
          },
        ],
      },
      poeme: {
        emoji: "📖",
        text: "Elle lui tendit un vieux volume des Contemplations, ouvert à une page qu'on devinait mille fois lue. “ Commencez, je vous prie ; je vous suivrai. ” Linu lut, un peu intimidé : “ Demain, dès l'aube, à l'heure où blanchit la campagne, / Je partirai. Vois-tu, je sais que tu m'attends. ” Mme Aubry ferma les yeux et reprit après lui, d'une voix qui tremblait à peine. Puis elle le regarda fixement et lui demanda ce que, selon lui, racontaient ces deux vers.",
        translation:
          "Ela lhe estendeu um velho volume de Les Contemplations, aberto numa página que se adivinhava lida mil vezes. “Comece, por favor; eu o acompanharei.” O Linu leu, um pouco intimidado: “Amanhã, ao raiar do dia, na hora em que o campo clareia, / Partirei. Vês, eu sei que tu me esperas.” A senhora Aubry fechou os olhos e repetiu depois dele, com uma voz que mal tremia. Depois olhou-o fixamente e perguntou o que, na opinião dele, contavam aqueles dois versos.",
        choices: [
          { text: "“ Un départ : quelqu'un partira à l'aube, parce qu'une personne l'attend. ”", translation: "“Uma partida: alguém vai partir ao amanhecer, porque uma pessoa o espera.”", next: "suite" },
          {
            text: "“ Un retour : quelqu'un rentre chez lui le soir, après une longue journée. ”",
            translation: "“Uma volta: alguém volta para casa à noite, depois de um longo dia.”",
            wrong: "“Dès l'aube, à l'heure où blanchit la campagne” = ao raiar do dia, na hora em que o campo clareia. E “Je partirai” está no futuro: alguém vai partir de manhã, e não voltar à noite.",
          },
        ],
      },
      suite: {
        emoji: "🌲",
        text: "“ C'est ce que tout le monde croit d'abord ”, dit-elle avec un sourire mystérieux, et elle récita la suite sans l'aide du livre : “ J'irai par la forêt, j'irai par la montagne. / Je ne puis demeurer loin de toi plus longtemps. ” Linu, gagné par l'émotion, murmura que ce devait être un rendez-vous d'amoureux. La comédienne ne répondit pas ; elle lui fit signe de tourner la page et de lire lui-même les deux derniers vers, à voix haute. Au-dehors, la pluie redoublait, et l'on n'entendait plus que le tic-tac d'une pendule.",
        translation:
          "“É o que todo mundo acha no começo”, disse ela com um sorriso misterioso, e recitou a continuação sem a ajuda do livro: “Irei pela floresta, irei pela montanha. / Não posso ficar longe de ti por mais tempo.” O Linu, tomado pela emoção, murmurou que devia ser um encontro de namorados. A atriz não respondeu; fez sinal para que ele virasse a página e lesse ele mesmo os dois últimos versos, em voz alta. Lá fora, a chuva apertava, e só se ouvia o tique-taque de um relógio de pêndulo.",
        choices: [{ text: "Lire les derniers vers.", translation: "Ler os últimos versos.", next: "tombe" }],
      },
      tombe: {
        emoji: "🕯️",
        text: "Linu lut : “ Et quand j'arriverai, je mettrai sur ta tombe / Un bouquet de houx vert et de bruyère en fleur. ” Il resta muet, le livre ouvert entre les ailes, comme si le sol s'était dérobé sous lui. Mme Aubry lui expliqua que Hugo avait écrit ces vers pour sa fille Léopoldine, noyée dans la Seine à Villequier, en 1843, quelques mois après son mariage. “ Tout le poème vous fait croire à un rendez-vous, et le dernier vers vous apprend que c'est un deuil : voilà tout son génie. ” Elle se tut un long moment, puis avoua qu'elle craignait, ce soir, de pleurer avant la fin.",
        translation:
          "O Linu leu: “E quando eu chegar, porei sobre o teu túmulo / Um buquê de azevinho verde e de urze em flor.” Ficou mudo, com o livro aberto entre as asas, como se o chão tivesse fugido debaixo dele. A senhora Aubry explicou que Hugo escrevera aqueles versos para a filha Léopoldine, afogada no Sena em Villequier, em 1843, poucos meses depois do casamento. “O poema inteiro faz você acreditar num encontro, e o último verso revela que é um luto: aí está toda a sua genialidade.” Ela se calou por um longo momento e depois confessou que temia, naquela noite, chorar antes do fim.",
        choices: [
          { text: "Lui conseiller de dire le dernier vers lentement, sans chercher à retenir ses larmes.", translation: "Aconselhá-la a dizer o último verso devagar, sem tentar segurar as lágrimas.", next: "soiree" },
          { text: "Lui proposer de supprimer les deux derniers vers, trop tristes.", translation: "Propor que ela corte os dois últimos versos, tristes demais.", next: "final_coupe" },
          {
            text: "Lui conseiller de relire le début, puisqu'elle a peur de l'oublier.",
            translation: "Aconselhá-la a reler o começo, já que ela tem medo de esquecê-lo.",
            wrong: "Ela teme chorar “avant la fin” porque o poema fala do luto de Hugo pela filha Léopoldine: o problema é a emoção, não a memória. Aliás, ela acabou de recitar o começo sem o livro.",
          },
        ],
      },
      soiree: {
        emoji: "🎭",
        text: "Le soir, une trentaine de personnes se pressèrent dans le salon, et Linu prit place derrière un paravent, le livre à la main, prêt à souffler. Mme Aubry dit les premiers vers d'une voix claire, sans une hésitation, comme si elle avait vingt ans. Mais, arrivée à “ Je ne puis demeurer loin de toi plus longtemps ”, elle s'arrêta net, et le silence devint presque insupportable. Linu comprit qu'elle n'avait pas oublié la suite : elle attendait seulement qu'on lui laissât le temps de la mériter. Il retint le souffle qu'il allait lui donner, et attendit avec elle.",
        translation:
          "À noite, umas trinta pessoas se apertaram no salão, e o Linu tomou o seu lugar atrás de um biombo, com o livro na mão, pronto para soprar. A senhora Aubry disse os primeiros versos com voz clara, sem uma hesitação, como se tivesse vinte anos. Mas, ao chegar a “Não posso ficar longe de ti por mais tempo”, parou de repente, e o silêncio se tornou quase insuportável. O Linu entendeu que ela não tinha esquecido a continuação: só esperava que lhe deixassem o tempo de merecê-la. Ele segurou o sopro que ia lhe dar e esperou com ela.",
        choices: [
          { text: "Attendre en silence, sans rien souffler.", translation: "Esperar em silêncio, sem soprar nada.", next: "final_bom" },
          { text: "Lui souffler aussitôt le vers suivant.", translation: "Soprar-lhe na mesma hora o verso seguinte.", next: "final_souffle" },
        ],
      },
      final_bom: {
        emoji: "🌹",
        text: "Au bout d'une éternité, qui dura peut-être dix secondes, Mme Aubry reprit, plus bas, et alla jusqu'au bout sans faillir. Quand elle eut déposé sur la tombe invisible le bouquet de houx vert et de bruyère en fleur, personne n'osa applaudir. Ce fut elle qui rompit le silence, en se tournant vers le paravent : “ Merci, jeune homme, de vous être tu. ” Plus tard, sous les arcades mouillées, elle lui confia qu'à son âge on n'apprend plus un poème : on le laisse vous apprendre. “ À cœur vaillant rien d'impossible ”, ajouta-t-elle en lui tapotant l'aile. Linu rentra à pied le long de la Seine, en se répétant les vers, et il lui sembla que le fleuve les connaissait déjà.",
        translation:
          "Depois de uma eternidade, que durou talvez dez segundos, a senhora Aubry recomeçou, mais baixo, e foi até o fim sem fraquejar. Quando ela depositou sobre o túmulo invisível o buquê de azevinho verde e de urze em flor, ninguém ousou aplaudir. Foi ela quem rompeu o silêncio, virando-se para o biombo: “Obrigada, meu jovem, por ter se calado.” Mais tarde, sob as arcadas molhadas, ela lhe confidenciou que, na idade dela, já não se aprende um poema: deixa-se que ele nos ensine. “Para um coração valente nada é impossível”, acrescentou, dando-lhe tapinhas na asa. O Linu voltou a pé ao longo do Sena, repetindo os versos, e pareceu-lhe que o rio já os conhecia.",
        ending: { tone: "bom", title: "O silêncio certo", message: "Você entendeu a virada do poema, do encontro ao luto, e percebeu que às vezes o melhor ponto é o que não sopra nada." },
      },
      final_souffle: {
        emoji: "📜",
        text: "Linu souffla le vers, un peu trop fort, et quelques têtes se tournèrent vers le paravent. Mme Aubry reprit docilement, mais quelque chose s'était brisé, et la fin du poème passa comme une leçon bien apprise. On applaudit poliment, puis on parla des petits-fours. En partant, la vieille dame serra la main de Linu avec gentillesse : “ Vous m'avez rendu service, mais je n'avais pas oublié ; je cherchais seulement le courage. ” Il comprit trop tard qu'il y a des silences qu'il ne faut pas combler.",
        translation:
          "O Linu soprou o verso, um pouco alto demais, e algumas cabeças se viraram para o biombo. A senhora Aubry retomou docilmente, mas algo se quebrara, e o fim do poema passou como uma lição bem decorada. Aplaudiram com educação e depois se falou dos salgadinhos. Na saída, a velha senhora apertou a mão do Linu com gentileza: “O senhor me ajudou, mas eu não tinha esquecido; só estava procurando coragem.” Ele entendeu tarde demais que há silêncios que não se devem preencher.",
        ending: { tone: "neutro", title: "Sopro antes da hora", message: "A atriz não tinha esquecido o verso: precisava só de tempo. O silêncio fazia parte do poema." },
      },
      final_coupe: {
        emoji: "✂️",
        text: "Mme Aubry le regarda longuement, sans colère, et referma le livre avec une douceur infinie. “ Couper la tombe, dit-elle, ce serait couper le poème ; autant réciter une chanson de printemps. ” Elle ajouta qu'elle préférait pleurer devant trente personnes que trahir Hugo devant une seule. Linu, confus, balbutia des excuses, qu'elle accepta d'un geste de la main. Le soir, elle lut le poème en entier, et ce fut lui qui eut les larmes aux yeux.",
        translation:
          "A senhora Aubry olhou-o longamente, sem raiva, e fechou o livro com uma doçura infinita. “Cortar o túmulo”, disse ela, “seria cortar o poema; seria o mesmo que recitar uma canção de primavera.” Acrescentou que preferia chorar diante de trinta pessoas a trair Hugo diante de uma só. O Linu, envergonhado, gaguejou desculpas, que ela aceitou com um gesto da mão. À noite, ela leu o poema inteiro, e foi ele quem ficou com lágrimas nos olhos.",
        ending: { tone: "neutro", title: "O poema inteiro", message: "Os dois últimos versos são o coração do poema: sem o túmulo, “Demain, dès l'aube” perde o sentido." },
      },
    },
  },
  {
    id: "fr-h45",
    level: "C2",
    cefr: "C2",
    title: "Du côté de Combray",
    emoji: "🧁",
    summary: "Em Illiers-Combray, a cidade que mudou de nome por causa de Proust, o Linu prova uma madeleine, escolhe entre os dois “lados” dos passeios do romance e reencontra uma lembrança da infância.",
    cultural_context:
      "Marcel Proust passou férias de infância em Illiers, no departamento de Eure-et-Loir, na casa de uma tia que inspirou a “tante Léonie” de “Em busca do tempo perdido”; a casa é hoje um museu. Em 1971, no centenário do nascimento do escritor, a cidade passou a se chamar oficialmente Illiers-Combray, unindo o nome real ao da cidade do romance. É no primeiro volume, “No caminho de Swann” (1913), que aparece a célebre madeleine molhada no chá.",
    start: "start",
    glossary: [
      ["la madeleine", "o bolinho em forma de concha"],
      ["le côté de Guermantes / de Méséglise", "os dois “lados”, os dois caminhos de passeio do romance"],
      ["la mémoire involontaire", "a memória involuntária"],
      ["une infusion de tilleul", "um chá de tília"],
      ["il trempa / il tressaillit", "ele molhou / ele estremeceu (passé simple)"],
      ["avant qu'il ne s'éloignât", "antes que ele se afastasse (imparfait du subjonctif)"],
      ["de bonne heure", "cedo"],
      ["Qui va à la chasse perd sa place", "quem sai perde o lugar (provérbio)"],
    ],
    nodes: {
      start: {
        emoji: "🚉",
        text: "Linu descendit du train à Illiers-Combray par un après-midi d'automne si calme qu'on eût dit que la ville elle-même faisait la sieste. Il portait sous l'aile un gros volume dont il n'avait lu que la première phrase, qu'il savait par cœur à force de l'avoir relue : “ Longtemps, je me suis couché de bonne heure. ” Devant la gare, une dame qui tenait la librairie du bourg le reconnut à son livre et l'aborda avec un sourire complice. “ Vous venez pour Marcel, n'est-ce pas ? Tout le monde vient pour Marcel, et tout le monde repart avec quelque chose qu'il n'était pas venu chercher. ” Elle lui indiqua le chemin de la maison de tante Léonie, en lui recommandant de ne pas s'y rendre le ventre vide.",
        translation:
          "O Linu desceu do trem em Illiers-Combray numa tarde de outono tão calma que se diria que a própria cidade fazia a sesta. Levava debaixo da asa um volume grosso do qual só tinha lido a primeira frase, que sabia de cor de tanto relê-la: “Durante muito tempo, fui me deitar cedo.” Na frente da estação, uma senhora que tinha a livraria da vila o reconheceu pelo livro e o abordou com um sorriso cúmplice. “O senhor veio pelo Marcel, não é? Todo mundo vem pelo Marcel, e todo mundo vai embora com alguma coisa que não tinha vindo buscar.” Ela lhe indicou o caminho da casa da tia Léonie, recomendando que ele não fosse até lá de barriga vazia.",
        choices: [
          { text: "Passer d'abord par la pâtisserie de la place, comme elle le conseille.", translation: "Passar primeiro na confeitaria da praça, como ela aconselha.", next: "patisserie" },
          {
            text: "Aller directement à la maison, à jeun, comme elle l'a demandé.",
            translation: "Ir direto para a casa, em jejum, como ela pediu.",
            wrong: "Ela recomendou o contrário: “ne pas s'y rendre le ventre vide” = não ir até lá de barriga vazia. Em Combray, uma madeleine antes da visita é quase obrigatória.",
          },
        ],
      },
      patisserie: {
        emoji: "🧁",
        text: "La pâtisserie sentait le beurre et la fleur d'oranger, et des madeleines dorées s'y alignaient en rangs serrés, bombées comme de petites coquilles. Le pâtissier, un homme jovial aux avant-bras farineux, en offrit une à Linu avec une tasse d'infusion de tilleul, “ comme chez tante Léonie ”, précisa-t-il. Linu trempa la madeleine, la porta à son bec et, à l'instant même où la pâte amollie toucha sa langue, il tressaillit. Ce n'était pas Combray qui lui revenait, mais une odeur de neige et de sel, un rire d'enfant sur la glace, et la voix de sa grand-mère qui l'appelait, là-bas, en Antarctique, avant qu'il ne s'éloignât trop du rivage. Le pâtissier, qui avait vu cent visiteurs tressaillir ainsi, se contenta de sourire.",
        translation:
          "A confeitaria cheirava a manteiga e a flor de laranjeira, e madeleines douradas se alinhavam em fileiras cerradas, abauladas como conchinhas. O confeiteiro, um homem jovial de antebraços enfarinhados, ofereceu uma ao Linu com uma xícara de chá de tília, “como na casa da tia Léonie”, explicou. O Linu molhou a madeleine, levou-a ao bico e, no instante exato em que a massa amolecida tocou a língua, estremeceu. Não era Combray que lhe voltava, mas um cheiro de neve e de sal, uma risada de criança no gelo, e a voz da avó que o chamava, lá longe, na Antártida, antes que ele se afastasse demais da margem. O confeiteiro, que já tinha visto cem visitantes estremecerem assim, limitou-se a sorrir.",
        choices: [
          { text: "Laisser venir le souvenir, sans le forcer.", translation: "Deixar a lembrança vir, sem forçá-la.", next: "maison" },
          {
            text: "“ Incroyable : je me souviens de mon enfance à Combray, chez tante Léonie ! ”",
            translation: "“Incrível: eu me lembro da minha infância em Combray, na casa da tia Léonie!”",
            wrong: "O texto diz “Ce n'était pas Combray qui lui revenait”: não era Combray que voltava ao Linu, mas a neve, o sal e a voz da avó na Antártida. É a memória involuntária de Proust, só que com as lembranças do próprio Linu.",
          },
        ],
      },
      maison: {
        emoji: "🏠",
        text: "La maison de tante Léonie se trouvait dans une rue tranquille, derrière une façade sans éclat qui ne laissait rien deviner de sa célébrité. La guide, une jeune femme passionnée, fit monter Linu jusqu'à la chambre de la tante, où le lit, la table de nuit et la fenêtre sur la rue semblaient attendre que la malade revînt s'y coucher. Elle lui expliqua que, dans le roman, la tante observait de sa fenêtre tout ce qui se passait à Combray, et que rien ne lui échappait. “ Au fond, dit-elle, Proust a fait d'une maison de province une cathédrale. ” Puis elle lui apprit que les promenades de la famille se faisaient de deux côtés opposés, et qu'il lui fallait choisir le sien pour l'après-midi.",
        translation:
          "A casa da tia Léonie ficava numa rua tranquila, atrás de uma fachada sem brilho que não deixava adivinhar nada da sua fama. A guia, uma jovem apaixonada, levou o Linu até o quarto da tia, onde a cama, a mesinha de cabeceira e a janela para a rua pareciam esperar que a doente voltasse a se deitar ali. Ela explicou que, no romance, a tia observava da janela tudo o que acontecia em Combray, e que nada lhe escapava. “No fundo”, disse, “Proust transformou uma casa do interior numa catedral.” Depois contou que os passeios da família se faziam por dois lados opostos, e que ele precisava escolher o seu para a tarde.",
        choices: [
          { text: "Partir du côté de Méséglise, celui de chez Swann, le long des haies d'aubépines.", translation: "Partir pelo lado de Méséglise, o do Swann, ao longo das sebes de pilriteiros.", next: "meseglise" },
          { text: "Partir du côté de Guermantes, au bord de la rivière.", translation: "Partir pelo lado de Guermantes, à beira do rio.", next: "guermantes" },
        ],
      },
      meseglise: {
        emoji: "🌸",
        text: "Le chemin montait doucement entre des haies, et Linu chercha des yeux les aubépines dont le roman parle avec tant de ferveur ; ce n'était pas la saison, et il n'en vit que les branches nues, hérissées d'épines. Il s'en voulut un peu, puis se dit que Proust lui-même avait écrit sur des fleurs qu'il ne voyait plus que dans sa mémoire. Au sommet d'une côte, il s'assit sur une borne et regarda le clocher de l'église Saint-Jacques se dresser au-dessus des toits, exactement comme dans le livre. Un vieil homme qui passait à bicyclette s'arrêta, l'observa, et lui demanda s'il attendait quelqu'un. Linu répondit qu'il attendait simplement que le paysage lui revînt, et le vieil homme, qui semblait avoir compris, repartit sans rien ajouter.",
        translation:
          "O caminho subia suavemente entre sebes, e o Linu procurou com os olhos os pilriteiros de que o romance fala com tanto fervor; não era a estação, e ele só viu os galhos nus, eriçados de espinhos. Ficou um pouco chateado consigo mesmo, depois pensou que o próprio Proust escrevera sobre flores que já só via na memória. No alto de uma ladeira, sentou-se num marco de pedra e olhou o campanário da igreja Saint-Jacques erguer-se acima dos telhados, exatamente como no livro. Um velho que passava de bicicleta parou, observou-o e perguntou se ele esperava alguém. O Linu respondeu que esperava simplesmente que a paisagem lhe voltasse, e o velho, que parecia ter entendido, seguiu caminho sem dizer mais nada.",
        choices: [{ text: "Revenir vers la place avant la nuit.", translation: "Voltar para a praça antes do anoitecer.", next: "retour" }],
      },
      guermantes: {
        emoji: "🏞️",
        text: "Linu suivit le Loir, qui dans le roman devient la Vivonne, entre des prairies humides où paissaient quelques vaches indifférentes à la littérature. Il avait espéré voir des nymphéas, mais l'eau, sous le ciel gris, ne reflétait que des saules et les nuages qui passaient. Il marcha si longtemps, perdu dans ses pensées, qu'il ne s'aperçut pas que le soleil baissait et que le chemin s'éloignait du bourg. Quand enfin il leva les yeux, il ne reconnut plus rien, et aucun clocher ne se montrait à l'horizon pour le guider. Un pêcheur, assis sur un pliant, lui fit remarquer qu'il était parti du côté de Guermantes, et que, comme le narrateur enfant, on n'y arrivait jamais.",
        translation:
          "O Linu seguiu o rio Loir, que no romance se torna o Vivonne, entre prados úmidos onde pastavam algumas vacas indiferentes à literatura. Esperava ver ninfeias, mas a água, sob o céu cinzento, só refletia salgueiros e as nuvens que passavam. Caminhou tanto tempo, perdido nos pensamentos, que não percebeu que o sol baixava e que o caminho se afastava da vila. Quando enfim levantou os olhos, não reconheceu mais nada, e nenhum campanário aparecia no horizonte para guiá-lo. Um pescador, sentado num banquinho dobrável, observou que ele tinha partido pelo lado de Guermantes e que, como o narrador quando criança, ali nunca se chegava.",
        choices: [
          { text: "Demander au pêcheur le chemin le plus court pour rentrer.", translation: "Perguntar ao pescador o caminho mais curto para voltar.", next: "retour" },
          { text: "Continuer tout droit, pour voir enfin où mène ce côté.", translation: "Seguir em frente, para ver enfim aonde leva esse lado.", next: "final_perdu" },
        ],
      },
      retour: {
        emoji: "🌙",
        text: "Quand Linu revint sur la place, la pâtisserie fermait ses volets, et le pâtissier lui fit signe d'entrer une dernière fois. Il avait gardé une madeleine de côté, “ pour le pingouin qui avait tressailli ”. Dehors, un groupe de touristes s'était installé à la seule table de la terrasse, sur la chaise que Linu avait laissée en partant. “ Qui va à la chasse perd sa place ”, dit le pâtissier en riant, et il lui avança un tabouret derrière le comptoir. Linu, sa madeleine à la main, hésita à la tremper de nouveau, de peur que le souvenir ne revînt pas.",
        translation:
          "Quando o Linu voltou à praça, a confeitaria fechava as persianas, e o confeiteiro fez sinal para que ele entrasse uma última vez. Tinha guardado uma madeleine, “para o pinguim que estremeceu”. Lá fora, um grupo de turistas tinha se instalado na única mesa da calçada, na cadeira que o Linu deixara ao sair. “Quem sai perde o lugar”, disse o confeiteiro rindo, e puxou para ele um banquinho atrás do balcão. O Linu, com a madeleine na mão, hesitou em molhá-la de novo, com medo de que a lembrança não voltasse.",
        choices: [
          { text: "La tremper quand même, sans rien attendre.", translation: "Molhá-la mesmo assim, sem esperar nada.", next: "final_bom" },
          { text: "La garder intacte, en souvenir.", translation: "Guardá-la intacta, de lembrança.", next: "final_intacte" },
          {
            text: "“ Vous partez à la chasse demain ? Je peux venir avec vous ? ”",
            translation: "“O senhor vai caçar amanhã? Posso ir junto?”",
            wrong: "“Qui va à la chasse perd sa place” é um provérbio: quem sai do lugar o perde (como o nosso “quem vai ao ar perde o lugar”). O confeiteiro está brincando porque os turistas pegaram a cadeira do Linu; ninguém vai caçar.",
          },
        ],
      },
      final_bom: {
        emoji: "🎉",
        text: "Il trempa la madeleine, et rien ne revint d'abord, que le goût du beurre et du tilleul. Puis, lentement, ce ne fut plus l'Antarctique qui remonta en lui, mais la journée qu'il venait de vivre : la libraire devant la gare, la chambre de la tante, le clocher au-dessus des toits. Il comprit que Combray était en train de devenir, à son tour, l'un de ses souvenirs, et qu'un jour peut-être une autre madeleine le lui rendrait tout entier. Le pâtissier, voyant son air, n'osa pas l'interrompre. Dans le train du retour, Linu ouvrit enfin son gros volume à la deuxième phrase, bien décidé, cette fois, à ne pas se coucher de bonne heure.",
        translation:
          "Ele molhou a madeleine, e a princípio nada voltou, a não ser o gosto de manteiga e de tília. Depois, lentamente, já não foi a Antártida que subiu dentro dele, mas o dia que acabara de viver: a livreira na frente da estação, o quarto da tia, o campanário acima dos telhados. Compreendeu que Combray estava se tornando, por sua vez, uma das suas lembranças, e que um dia talvez outra madeleine a devolvesse inteira. O confeiteiro, vendo a expressão dele, não ousou interrompê-lo. No trem de volta, o Linu enfim abriu o volume grosso na segunda frase, bem decidido, desta vez, a não ir se deitar cedo.",
        ending: { tone: "bom", title: "O tempo reencontrado", message: "Você entendeu a memória involuntária de Proust, o provérbio do confeiteiro e os subjuntivos literários, e fez de Combray uma lembrança sua." },
      },
      final_intacte: {
        emoji: "🧁",
        text: "Linu enveloppa la madeleine dans un mouchoir et la rangea dans sa poche, comme on garde une lettre qu'on n'ose pas ouvrir. Dans le train du retour, il la sentait contre lui, intacte et pleine de promesses. Arrivé chez lui, il la posa sur une étagère, où elle durcit peu à peu. Des semaines plus tard, il la trouva sèche comme une pierre et se demanda ce qu'elle aurait pu lui rendre. Il comprit qu'un souvenir qu'on n'ose pas réveiller finit, lui aussi, par se perdre.",
        translation:
          "O Linu embrulhou a madeleine num lenço e a guardou no bolso, como se guarda uma carta que não se ousa abrir. No trem de volta, sentia-a junto de si, intacta e cheia de promessas. Chegando em casa, colocou-a numa prateleira, onde ela endureceu pouco a pouco. Semanas depois, encontrou-a seca como uma pedra e se perguntou o que ela poderia ter-lhe devolvido. Compreendeu que uma lembrança que não se ousa despertar acaba, ela também, por se perder.",
        ending: { tone: "neutro", title: "Madeleine guardada", message: "Com medo de perder a lembrança, o Linu não arriscou: e a madeleine, sem ser provada, secou na prateleira." },
      },
      final_perdu: {
        emoji: "🌾",
        text: "Linu continua tout droit, persuadé qu'au bout du chemin il trouverait quelque château ou quelque duchesse. Il ne trouva qu'un champ, puis un autre, puis une route départementale où les voitures passaient trop vite. La nuit tomba, et il dut appeler un taxi depuis un hameau dont il ne sut jamais le nom. Il manqua le dernier train et passa la nuit dans une petite chambre d'hôtes, sans madeleine ni tilleul. Il se dit, en s'endormant, que le pêcheur avait eu raison : le côté de Guermantes est de ceux où l'on n'arrive jamais.",
        translation:
          "O Linu seguiu em frente, convencido de que no fim do caminho encontraria algum castelo ou alguma duquesa. Só encontrou um campo, depois outro, depois uma estrada onde os carros passavam rápido demais. A noite caiu, e ele teve de chamar um táxi de um vilarejo cujo nome nunca soube. Perdeu o último trem e passou a noite num quartinho de pousada, sem madeleine nem tília. Pensou, ao adormecer, que o pescador tinha razão: o lado de Guermantes é daqueles aonde nunca se chega.",
        ending: { tone: "neutro", title: "Rumo a Guermantes", message: "O pescador avisou: pelo lado de Guermantes não se chega a lugar nenhum. O Linu perdeu o trem e a última madeleine." },
      },
    },
  },
];
