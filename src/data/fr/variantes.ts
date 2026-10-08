import type { LanguageVariant } from '../types';
import { toIpaFr } from '@/services/ipa-fr';

/** Variantes do francês: França (padrão), Quebec, Bélgica, Suíça e a África francófona. */
export const VARIANTS_FR: LanguageVariant[] = [
  {
    code: 'fr-FR',
    country: 'FRA',
    kind: 'dialeto',
    speechLocale: 'fr-FR',
    ipa: (t) => toIpaFr(t),
    name: 'Francês padrão',
    flag: '🇫🇷',
    summary:
      'O padrão do app: o francês da França, com a pronúncia de Paris, o da escola, dos jornais e da televisão, entendido de Lille a Marselha e em toda a francofonia, com “vous” no tratamento formal.',
    card: {
      id: 'fr-fr-c1',
      title: 'Por que o francês da França?',
      emoji: '🇫🇷',
      history:
        'O francês nasceu do latim falado no norte da Gália e se firmou como a língua do rei, em Paris. Em 1539, a Ordenação de Villers-Cotterêts mandou redigir os atos da justiça e da administração em francês, e não mais em latim. Em 1635, o cardeal Richelieu fundou a Academia Francesa, encarregada de cuidar da língua e de fazer o seu dicionário. Mesmo assim, na época da Revolução, boa parte dos franceses ainda falava no dia a dia bretão, occitano, alsaciano, basco ou algum dialeto. O francês padrão chegou a todos com a escola pública gratuita e obrigatória dos anos 1880, depois com o rádio e a televisão.',
      culture_tip:
        'Na França, “bonjour” abre todas as portas: diga “Bonjour, madame” ou “Bonjour, monsieur” ao entrar numa loja, numa padaria ou num consultório, e “au revoir” ao sair. Com desconhecidos, use “vous”; o “tu” fica para amigos, família, crianças e colegas jovens, e é melhor esperar que o outro proponha. Entre amigos, cumprimenta-se com “la bise”, os beijinhos no rosto: o número muda de região para região, de um a quatro.',
      grammar_why:
        'Quatro marcas do padrão: (1) “vous” é ao mesmo tempo o plural de “tu” e o tratamento formal: “Vous êtes brésilien ?”; (2) na fala, “on” substitui quase sempre “nous”: “On va au cinéma ?” (a gente vai…); (3) o passado da conversa é o passé composé: “Hier, je suis allé à la plage”; o passé simple (“il alla”) é o tempo da literatura e dos livros de história; (4) a negação escrita é dupla, “ne… pas”, mas na fala informal o “ne” quase sempre cai: “Je sais pas”. No app, escrevemos sempre com o “ne”.',
      grammar_examples: [
        ['Bonjour, madame. Vous êtes de Lyon ?', 'Bom dia, senhora. A senhora é de Lyon?'],
        ['Salut Léa, tu viens ce soir ?', 'Oi, Léa, você vem hoje à noite?'],
        ['On va au cinéma samedi ?', 'A gente vai ao cinema no sábado?'],
        ['Hier, je suis allé à la plage avec ma sœur.', 'Ontem fui à praia com a minha irmã.'],
        ['Je ne sais pas. (fala informal: “ Je sais pas. ”)', 'Não sei. (na fala informal, o “ne” cai)'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O “r” é uvular, feito no fundo da garganta: [ʁ]. Soa parecido com o “r” de “rato” de muitos brasileiros, só que mais suave e sonoro: “Paris” [paʁi], “rue” [ʁy].',
      'Quatro vogais nasais no papel: “an/en” [ɑ̃], “on” [ɔ̃], “in” [ɛ̃] e “un” [œ̃]. Em Paris e na maior parte da França, “un” se confundiu com “in”: “brun” e “brin” soam iguais. Diferente do português, a nasal não fecha com um “m” ou “n” no fim: “bon” é [bɔ̃], sem o “n”.',
      'Letras finais mudas e liaison: o “s”, o “t”, o “x” e o “d” do fim quase nunca se pronunciam (“petit” [pəti]), mas voltam a soar diante de vogal nas ligações obrigatórias: “les‿amis” [lez‿ami], “un petit‿enfant” [œ̃ pətit‿ɑ̃fɑ̃].',
      'O sotaque do Sul (Marselha, Toulouse) é bem diferente do de Paris: o “e” mudo se pronuncia (“petite” soa “pe-ti-te”), e as nasais ganham um fim consonantal (“pain” soa quase “pèng”). É francês tão correto quanto o de Paris.',
      "Em Paris, a diferença entre o “a” de “patte” (pata) e o “â” de “pâte” (massa) quase desapareceu, e o “e” mudo cai com frequência na fala rápida: “je ne sais pas” vira “j'sais pas”.",
    ],
    vocab: [
      ['pain au chocolat', 'chocolatine', 'o pão folhado com chocolate', 'no Sudoeste (Toulouse, Bordeaux): a disputa entre as duas palavras é piada nacional'],
      ['sac (en plastique)', 'poche', 'sacola (de plástico)', 'no Sudoeste'],
      ['serpillière', 'wassingue (Nord), since (Provence), panosse (Savoie)', 'pano de chão', 'cada região tem o seu jeito de dizer'],
      ['déjeuner (midi) · dîner (soir)', 'dîner (midi) · souper (soir)', 'almoço · jantar', 'no Norte e no interior de várias regiões; também na Bélgica, na Suíça e no Quebec'],
      ['il pleut beaucoup', 'il drache', 'está chovendo forte', 'no Norte e na Bélgica'],
      ['la bruine', 'le crachin', 'garoa', 'a garoa fininha que é a marca da Bretanha'],
      ['personne', 'dégun', 'ninguém', 'gíria de Marselha, vinda do provençal'],
      ['fou', 'fada', 'maluco', 'em Marselha e na Provença'],
      ['la fête', 'la feria', 'festa de rua com bandas e touradas', 'no Sul: Nîmes, Béziers, Dax'],
      ['pomme de terre', 'patate', 'batata', 'coloquial em toda a França; no Quebec, é a palavra de todo dia'],
    ],
  },
  {
    code: 'fr-CA',
    country: 'CAN',
    kind: 'dialeto',
    speechLocale: 'fr-CA',
    ipa: (t) => toIpaFr(t),
    name: 'Francês do Quebec',
    flag: '🇨🇦',
    summary:
      'O francês do Quebec, a maior comunidade francófona das Américas: mesma gramática do padrão, com sotaque próprio, o “tu” usado com mais facilidade e palavras como “char”, “dépanneur”, “magasiner” e “courriel”.',
    card: {
      id: 'fr-ca-c1',
      title: 'Char, dépanneur et courriel',
      emoji: '🍁',
      history:
        'Em 1608, Samuel de Champlain fundou a cidade de Quebec, às margens do rio São Lourenço, e ali nasceu a Nova França. Em 1763, pelo Tratado de Paris, a colônia passou para a Coroa britânica, mas os descendentes dos colonos franceses mantiveram a língua, a religião e as leis civis. Nos anos 1960, a Revolução Tranquila modernizou a província, e em 1977 a Carta da Língua Francesa (a “Lei 101”) fez do francês a língua oficial do Quebec, no trabalho, no comércio e na escola. O Escritório Quebequense da Língua Francesa propõe palavras francesas para os termos novos: foi dali que saiu “courriel”, hoje recomendado também na França.',
      culture_tip:
        "No Quebec, o “tu” chega mais depressa: nas lojas e entre colegas, muita gente trata você por “tu” desde o primeiro minuto. As refeições mudam de nome: “déjeuner” é o café da manhã, “dîner” é o almoço e “souper” é o jantar. Quando você agradece, ouve “bienvenue” (de nada). No fim do inverno, as famílias vão à “cabane à sucre” comer a “tire d'érable”, xarope de bordo quente endurecido na neve; e o prato mais famoso da província é a “poutine”: batata frita, queijo em grãos e molho escuro.",
      grammar_why:
        "A gramática escrita é a mesma do francês da França: jornais, leis e livros do Quebec seguem a norma comum. A fala tem marcas próprias: (1) a partícula interrogativa “-tu”, que transforma uma frase em pergunta: “Tu viens-tu ?”, “C'est-tu loin ?”; (2) formas populares como “icitte” (ici), “moé” e “toé” (moi, toi); (3) muitas palavras próprias, antigas ou criadas no Quebec: “char” (carro), “magasiner” (fazer compras), “dépanneur” (loja de conveniência), “blonde” (namorada). E, ao contrário do que se pensa, o Quebec evita os anglicismos na escrita: diz-se “courriel” e “fin de semaine”, e não “e-mail” e “week-end”. No app, seguimos o padrão da França; aqui você aprende a reconhecer o Quebec.",
      grammar_examples: [
        ['Tu viens-tu souper à soir ?', 'Você vem jantar hoje à noite? (França: Tu viens dîner ce soir ?)'],
        ["J'ai stationné mon char devant le dépanneur.", "Estacionei o carro na frente da loja de conveniência. (França: J'ai garé ma voiture devant la supérette.)"],
        ['On va magasiner au centre-ville en fin de semaine.', 'Vamos fazer compras no centro no fim de semana. (França: faire du shopping le week-end)'],
        ["Je t'envoie un courriel ce soir.", 'Te mando um e-mail hoje à noite. (França: un e-mail, un mail)'],
        ["C'est plate, il pleut encore !", "Que chato, está chovendo de novo! (França: c'est nul, c'est ennuyeux)"],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O “t” e o “d” antes de “i” e de “u” viram “ts” e “dz”, como no “tia” e no “dia” de boa parte do Brasil: “tu” soa [tsy], “dire” soa [dziʁ], “petit” soa [pətsi]. O brasileiro se sente em casa!',
      'O “i”, o “u” e o “ou” ficam mais abertos em sílaba fechada por consoante: “petite” soa [pətsɪt], “musique” soa [myzɪk], “route” soa [ʁʊt].',
      'As vogais longas viram ditongos na fala do dia a dia: “père” soa quase “paér”, “fête” soa quase “faite”, “tard” soa quase “taôr”.',
      'O “a” de “pâte” e o de “patte” continuam diferentes: o de “pâte” é mais fechado e posterior, quase um “ó”. E, na fala popular, “moi” e “toi” soam “moé” e “toé”.',
      'O “r” de Montreal e da maior parte da província é uvular, como o de Paris; o “r” vibrado com a ponta da língua ainda se ouve em pessoas mais velhas e em algumas regiões.',
    ],
    vocab: [
      ['la voiture', 'le char', 'o carro', 'do francês antigo “char” (carroça); nada a ver com o tanque de guerra'],
      ['faire du shopping', 'magasiner', 'fazer compras (passear pelas lojas)'],
      ["la supérette, l'épicerie du coin", 'le dépanneur', 'loja de conveniência', 'o “dep” do bairro, aberto até tarde'],
      ['le petit-déjeuner · le déjeuner · le dîner', 'le déjeuner · le dîner · le souper', 'café da manhã · almoço · jantar', 'um “dîner” em Montreal é ao meio-dia!'],
      ['un e-mail', 'un courriel', 'e-mail', 'palavra criada no Quebec, hoje recomendada também na França'],
      ['le week-end', 'la fin de semaine', 'fim de semana'],
      ['se garer, le parking', 'stationner, le stationnement', 'estacionar, estacionamento'],
      ['le petit ami, la petite amie', 'le chum, la blonde', 'namorado, namorada', 'a “blonde” pode ter o cabelo de qualquer cor'],
      ['ennuyeux, nul', 'plate', 'chato'],
      ['le portable', 'le cellulaire, le cell', 'celular'],
      ['le pull', 'le chandail', 'suéter, blusa de frio'],
      ['le bonnet', 'la tuque', 'gorro de lã', 'indispensável no inverno quebequense'],
      ['la myrtille', 'le bleuet', 'mirtilo', 'a região do Lac-Saint-Jean é a terra dos bleuets'],
      ['les baskets', 'les espadrilles', 'tênis'],
      ['le maïs', "le blé d'Inde", 'milho', "o “blé d'Inde” em espiga, cozido, é festa no fim do verão"],
      ['le chewing-gum', 'la gomme', 'chiclete', 'na França, “gomme” é a borracha de apagar'],
      ['le soda', 'la liqueur', 'refrigerante', 'no Quebec, “liqueur” não tem álcool'],
      ['la tétine', 'la suce', 'chupeta'],
      ["l'essence", 'le gaz', 'gasolina', '“mettre du gaz”, abastecer'],
      ['la crèche', 'la garderie', 'creche'],
      ['de rien', 'bienvenue', 'de nada', 'na França, “bienvenue” é só “seja bem-vindo”'],
      ["à tout à l'heure", 'à tantôt', 'até mais tarde', 'também na Bélgica'],
      ["d'accord, parfait", 'tiguidou', 'beleza, combinado', 'bem coloquial'],
      ['ici', 'icitte', 'aqui', 'fala popular; não se escreve'],
    ],
    stories: [
      {
        id: 'fr-ca-h1',
        variant: 'fr-CA',
        level: 'B1.1',
        cefr: 'B1',
        title: 'Linu à Montréal',
        emoji: '❄️',
        summary: 'Numa noite gelada de fevereiro em Montreal, Linu passa no “dépanneur” a pedido da amiga Émilie e precisa decidir entre patinar no Mont Royal ou chegar a tempo para o “souper”.',
        cultural_context:
          'Montreal é a maior cidade do Quebec e a maior cidade de língua francesa das Américas. No inverno, a temperatura cai muitas vezes abaixo de vinte graus negativos, e parte da vida corre no metrô e na cidade subterrânea, uma rede de túneis que liga estações, lojas e prédios. No parque do Mont Royal, o lago aux Castors vira pista de patinação. Nas lojas do centro, é comum ouvir o “Bonjour-hi!”, um cumprimento em francês e em inglês ao mesmo tempo.',
        start: 'start',
        glossary: [
          ['il faisait moins vingt', 'fazia vinte graus negativos (imparfait: o cenário)'],
          ['il est sorti', 'ele saiu (passé composé: a ação)'],
          ['apporte-le', 'traga (o leite) (imperativo + le)'],
          ['il en prend deux litres', 'ele pega dois litros (dele)'],
          ["je l'ai apporté", 'eu trouxe (o leite)'],
          ['le dépanneur', 'loja de conveniência (Quebec)'],
          ['souper', 'jantar (Quebec)'],
          ['la tuque', 'gorro de lã (Quebec)'],
        ],
        nodes: {
          start: {
            emoji: '🥶',
            text: "Il faisait moins vingt quand Linu est sorti de la station Mont-Royal. Il neigeait, et tout le monde portait une tuque. Sur son cellulaire, il a trouvé un message de son amie Émilie : “ Tu viens-tu souper à soir ? Passe au dépanneur et achète du lait, s'il te plaît. Apporte-le avant six heures ! ”",
            translation:
              'Fazia vinte graus negativos quando o Linu saiu da estação Mont-Royal. Estava nevando, e todo mundo usava gorro. No celular, ele encontrou uma mensagem da amiga Émilie: “Você vem jantar hoje à noite? Passa na loja de conveniência e compra leite, por favor. Traz antes das seis!”',
            choices: [
              { text: 'Linu va au dépanneur.', translation: 'Linu vai à loja de conveniência.', next: 'dep' },
              {
                text: "Linu répond qu'il va manger chez elle demain midi.",
                translation: 'Linu responde que vai comer na casa dela amanhã ao meio-dia.',
                wrong: 'No Quebec, “souper” é o jantar, e “à soir” quer dizer “hoje à noite” (na França: ce soir). A Émilie convidou o Linu para jantar hoje, e não para almoçar amanhã!',
              },
            ],
          },
          dep: {
            emoji: '🏪',
            text: "Au dépanneur, le commis lui a dit : “ Bonjour-hi ! Le lait est au fond, à côté des liqueurs. ” Linu en a pris deux litres. Au comptoir, il a vu une bouteille de sirop d'érable et il a pensé : “ Émilie l'adore ! ” Il l'a achetée aussi.",
            translation:
              'Na loja, o atendente disse: “Bonjour-hi! O leite está no fundo, ao lado dos refrigerantes.” Linu pegou dois litros. No caixa, viu uma garrafa de xarope de bordo e pensou: “A Émilie adora!” E comprou também.',
            choices: [{ text: 'Linu paie et il sort.', translation: 'Linu paga e sai.', next: 'rue' }],
          },
          rue: {
            emoji: '🌨️',
            text: "Dehors, la neige tombait plus fort. Il était seulement cinq heures : Linu avait encore une heure avant le souper. Il pouvait monter au lac aux Castors, sur le mont Royal, pour patiner un peu, ou prendre le métro et aller directement chez Émilie.",
            translation:
              'Lá fora, a neve caía mais forte. Eram só cinco horas: Linu ainda tinha uma hora antes do jantar. Ele podia subir até o lago aux Castors, no Mont Royal, para patinar um pouco, ou pegar o metrô e ir direto para a casa da Émilie.',
            choices: [
              { text: 'Il monte au lac aux Castors.', translation: 'Ele sobe até o lago aux Castors.', next: 'lac' },
              { text: 'Il prend le métro.', translation: 'Ele pega o metrô.', next: 'metro' },
            ],
          },
          lac: {
            emoji: '⛸️',
            text: "Sur le lac gelé, des enfants patinaient en riant. Un garçon a prêté ses patins à Linu : “ Essaie-les ! Tu vas voir, c'est facile. ” Linu les a mis. Il est tombé deux fois, puis il a glissé sur la glace comme sur la banquise !",
            translation:
              'No lago congelado, umas crianças patinavam rindo. Um menino emprestou os patins ao Linu: “Experimenta! Você vai ver, é fácil.” Linu os calçou. Caiu duas vezes, depois deslizou no gelo como na banquisa!',
            choices: [
              { text: 'Linu patine encore un peu, puis il rend les patins et prend le métro.', translation: 'Linu patina mais um pouco, depois devolve os patins e pega o metrô.', next: 'metro' },
              { text: "Linu s'amuse tellement qu'il oublie l'heure.", translation: 'Linu se diverte tanto que esquece a hora.', next: 'final_tard' },
            ],
          },
          metro: {
            emoji: '🚇',
            text: "Dans le métro, il faisait chaud et Linu a enlevé sa tuque. Chez Émilie, ça sentait bon : elle préparait une poutine. “ Salut Linu ! As-tu pensé au lait ? ” Linu a souri : “ Oui, je l'ai apporté ! Et je t'ai acheté une surprise. ”",
            translation:
              'No metrô, estava quente, e Linu tirou o gorro. Na casa da Émilie, tinha um cheiro bom: ela estava preparando uma poutine. “Oi, Linu! Você lembrou do leite?” Linu sorriu: “Sim, eu trouxe! E comprei uma surpresa para você.”',
            choices: [
              { text: "Linu lui donne le lait et le sirop d'érable.", translation: 'Linu entrega a ela o leite e o xarope de bordo.', next: 'final_souper' },
              {
                text: 'Linu a oublié le lait au dépanneur.',
                translation: 'Linu esqueceu o leite na loja.',
                wrong: "“Oui, je l'ai apporté!”: o “l'” (le) retoma o leite. O Linu trouxe, sim, e ainda comprou uma surpresa!",
              },
            ],
          },
          final_souper: {
            emoji: '🍟',
            text: "Émilie était ravie : “ Du sirop d'érable ! Merci, t'es ben fin ! ” Ils ont mangé la poutine, avec ses frites, son fromage en grains et sa sauce brune. Pour le dessert, ils ont versé du sirop sur de la crème glacée. “ Tu reviens-tu la semaine prochaine ? ”",
            translation:
              'A Émilie ficou encantada: “Xarope de bordo! Obrigada, você é um amor!” Eles comeram a poutine, com as batatas fritas, o queijo em grãos e o molho escuro. De sobremesa, puseram xarope no sorvete. “Você volta semana que vem?”',
            ending: {
              tone: 'bom',
              title: 'Souper au chaud',
              message: 'Você acompanhou a noite no imparfait (o cenário: “il faisait”, “il neigeait”) e no passé composé (as ações: “il est sorti”, “il a pris”), e ainda aprendeu “dépanneur”, “souper”, “tuque” e “à soir”.',
            },
          },
          final_tard: {
            emoji: '🌙',
            text: "Linu patinait si bien qu'il n'a pas vu l'heure passer. Quand il est arrivé chez Émilie, il était huit heures et la poutine était froide. Émilie a ri : “ C'est pas grave, on va la réchauffer. Mais la prochaine fois, regarde ton cell ! ”",
            translation:
              'Linu patinava tão bem que nem viu a hora passar. Quando chegou à casa da Émilie, eram oito horas, e a poutine estava fria. A Émilie riu: “Não tem problema, a gente esquenta. Mas da próxima vez, olha o celular!”',
            ending: {
              tone: 'neutro',
              title: 'Pinguim patinador',
              message: "Um pinguim no gelo esquece a hora! Repare na fala quebequense: “c'est pas grave”, sem o “ne”, e “cell”, o celular.",
            },
          },
        },
      },
      {
        id: 'fr-ca-h2',
        variant: 'fr-CA',
        level: 'B1.4',
        cefr: 'B1',
        title: 'Le Carnaval de Québec',
        emoji: '⛄',
        summary: "Em pleno Carnaval de Inverno, Linu e o amigo Mathieu descem da Cidade Alta à Cidade Baixa de Quebec atrás da “tire d'érable” e do Bonhomme Carnaval.",
        cultural_context:
          'A cidade de Quebec, fundada em 1608, é a capital da província. O centro histórico, o Vieux-Québec, é Patrimônio Mundial da UNESCO desde 1985 e se divide em Cidade Alta, onde fica o Château Frontenac, e Cidade Baixa, ligadas por um funicular e por escadarias como a Casse-Cou (“quebra-pescoço”). Em fevereiro, o Carnaval de Quebec tem como mascote o Bonhomme, um boneco de neve de gorro vermelho e faixa colorida, e uma corrida de canoas que atravessam o rio São Lourenço entre blocos de gelo.',
        start: 'start',
        glossary: [
          ['il faut que tu voies', 'é preciso que você veja'],
          ['je veux que tu mettes', 'quero que você ponha'],
          ["elle a peur qu'on tombe", 'ela tem medo de que a gente caia'],
          ['je suis content que tu sois là', 'fico contente que você esteja aqui'],
          ['il faut que vous attendiez', 'é preciso que vocês esperem'],
          ['il dit que… / il demande si…', 'ele diz que… / ele pergunta se… (discurso indireto)'],
          ["la tire d'érable", 'puxa-puxa de xarope de bordo na neve'],
          ['la tuque', 'gorro de lã (Quebec)'],
        ],
        nodes: {
          start: {
            emoji: '🏰',
            text: "On est en février, et Québec est en fête : c'est le Carnaval ! Linu retrouve son ami Mathieu devant le Château Frontenac. Mathieu lui dit : “ Il faut que tu voies le Bonhomme ! Mais d'abord, je veux que tu mettes ta tuque : il fait moins quinze. ”",
            translation:
              'É fevereiro, e Quebec está em festa: é o Carnaval! Linu encontra o amigo Mathieu na frente do Château Frontenac. Mathieu diz: “Você precisa ver o Bonhomme! Mas antes, quero que você ponha o gorro: está fazendo quinze graus negativos.”',
            choices: [
              { text: 'Linu met sa tuque, même si les manchots ont rarement froid.', translation: 'Linu põe o gorro, mesmo que os pinguins raramente sintam frio.', next: 'terrasse' },
              {
                text: 'Mathieu veut que Linu enlève sa tuque.',
                translation: 'Mathieu quer que o Linu tire o gorro.',
                wrong: '“Je veux que tu mettes ta tuque”: “mettes” é o subjuntivo de “mettre” (pôr). O Mathieu quer que o Linu PONHA o gorro, porque faz quinze graus negativos.',
              },
            ],
          },
          terrasse: {
            emoji: '🚡',
            text: "Sur la terrasse Dufferin, Mathieu montre le fleuve Saint-Laurent, plein de glace. “ Pour descendre à la Basse-Ville, on peut prendre le funiculaire ou l'escalier Casse-Cou. Ma mère dit que l'escalier est glissant l'hiver, et elle a toujours peur qu'on tombe ! ”",
            translation:
              'Na terrasse Dufferin, Mathieu mostra o rio São Lourenço, cheio de gelo. “Para descer à Cidade Baixa, dá para pegar o funicular ou a escadaria Casse-Cou. Minha mãe diz que a escada fica escorregadia no inverno, e ela sempre tem medo de que a gente caia!”',
            choices: [
              { text: 'Ils prennent le funiculaire.', translation: 'Eles pegam o funicular.', next: 'funi' },
              { text: "Ils descendent par l'escalier Casse-Cou.", translation: 'Eles descem pela escadaria Casse-Cou.', next: 'escalier' },
            ],
          },
          funi: {
            emoji: '🚠',
            text: "Le funiculaire descend doucement vers le quartier Petit-Champlain. En bas, les rues sont décorées de lumières. Mathieu demande à Linu s'il veut goûter de la tire d'érable ou s'il préfère voir la course de canots sur le fleuve.",
            translation:
              "O funicular desce devagar até o bairro Petit-Champlain. Lá embaixo, as ruas estão enfeitadas com luzes. Mathieu pergunta ao Linu se ele quer provar a “tire d'érable” ou se prefere ver a corrida de canoas no rio.",
            choices: [
              { text: "Linu veut goûter la tire d'érable.", translation: "Linu quer provar a “tire d'érable”.", next: 'tire' },
              { text: 'Linu veut voir la course de canots.', translation: 'Linu quer ver a corrida de canoas.', next: 'canot' },
            ],
          },
          escalier: {
            emoji: '⚠️',
            text: "L'escalier Casse-Cou porte bien son nom : les marches sont couvertes de glace. Linu se couche sur le ventre et glisse jusqu'en bas, comme sur la banquise ! Mathieu arrive deux minutes après lui : “ Je suis content que tu ne sois pas blessé ! Mais ne le dis pas à ma mère. ”",
            translation:
              'A escadaria Casse-Cou faz jus ao nome: os degraus estão cobertos de gelo. Linu se deita de barriga e desliza até lá embaixo, como na banquisa! Mathieu chega dois minutos depois: “Fico contente que você não tenha se machucado! Mas não conte para a minha mãe.”',
            choices: [
              { text: "Ils vont goûter la tire d'érable.", translation: "Eles vão provar a “tire d'érable”.", next: 'tire' },
              { text: 'Ils vont voir la course de canots.', translation: 'Eles vão ver a corrida de canoas.', next: 'canot' },
            ],
          },
          tire: {
            emoji: '🍁',
            text: "Devant une cabane en bois, un monsieur verse du sirop d'érable bouillant sur une longue table couverte de neige. Il explique : “ Il faut que vous attendiez une minute, le temps que le sirop durcisse. Après, vous le roulez sur un bâton. ”",
            translation:
              'Na frente de uma cabana de madeira, um senhor despeja xarope de bordo fervente numa mesa comprida coberta de neve. Ele explica: “É preciso que vocês esperem um minuto para o xarope endurecer. Depois, vocês o enrolam num palito.”',
            choices: [
              { text: 'Linu attend une minute, puis il roule la tire sur son bâton.', translation: 'Linu espera um minuto e depois enrola a “tire” no palito.', next: 'final_tire' },
              { text: 'Linu la prend tout de suite avec les doigts.', translation: 'Linu pega na hora, com os dedos.', next: 'final_chaud' },
              {
                text: "Le monsieur dit qu'il faut manger le sirop bouillant.",
                translation: 'O senhor diz que é preciso comer o xarope fervendo.',
                wrong: '“Il faut que vous attendiez une minute”: é preciso ESPERAR um minuto, para o xarope esfriar e endurecer na neve. “Attendiez” é o subjuntivo de “attendre”.',
              },
            ],
          },
          canot: {
            emoji: '🛶',
            text: "Sur le fleuve, les équipes poussent leurs canots sur la glace, sautent dedans et rament dans l'eau glacée. Mathieu dit que c'est la course la plus dure du Carnaval. Tout à coup, une dame se retourne : “ Voulez-vous que je vous prenne en photo ? Regardez, le Bonhomme arrive ! ”",
            translation:
              'No rio, as equipes empurram as canoas sobre o gelo, pulam dentro delas e remam na água gelada. Mathieu diz que é a corrida mais difícil do Carnaval. De repente, uma senhora se vira: “Querem que eu tire uma foto de vocês? Olhem, o Bonhomme está chegando!”',
            choices: [{ text: '“ Oui, merci beaucoup ! ”', translation: '“Sim, muito obrigado!”', next: 'final_bonhomme' }],
          },
          final_tire: {
            emoji: '🍭',
            text: "La tire est dorée et collante. Linu la mange doucement : c'est le meilleur bonbon de sa vie ! Mathieu sourit : “ Je suis content que tu aimes ça. Il faut que tu reviennes au printemps, pour la cabane à sucre ! ”",
            translation:
              'A “tire” está dourada e grudenta. Linu come devagar: é a melhor bala da vida dele! Mathieu sorri: “Fico contente que você goste. Você precisa voltar na primavera, para a cabane à sucre!”',
            ending: {
              tone: 'bom',
              title: "Douceur d'érable",
              message: 'Você entendeu o subjuntivo do dia: “il faut que tu voies”, “je veux que tu mettes”, “il faut que vous attendiez”, “je suis content que tu aimes”.',
            },
          },
          final_chaud: {
            emoji: '🥵',
            text: "Aïe ! Le sirop est encore bouillant et il colle aux doigts de Linu. Le monsieur lui donne vite de la neige pour les refroidir. “ Je vous ai dit d'attendre ! ”, dit-il en riant.",
            translation:
              'Ai! O xarope ainda está fervendo e gruda nos dedos do Linu. O senhor lhe dá depressa um pouco de neve para esfriá-los. “Eu disse para esperar!”, fala ele, rindo.',
            ending: {
              tone: 'neutro',
              title: 'Trop pressé',
              message: '“Il faut que vous attendiez une minute”: o conselho estava no subjuntivo, e era para seguir! Na segunda tentativa, deu tudo certo.',
            },
          },
          final_bonhomme: {
            emoji: '⛄',
            text: "Le Bonhomme, avec sa tuque rouge et sa ceinture fléchée, serre la main de Linu. La dame prend la photo. Mathieu dit que c'est la plus belle photo du Carnaval, et Linu la montre à tout le monde.",
            translation:
              'O Bonhomme, com o gorro vermelho e a faixa colorida, aperta a mão do Linu. A senhora tira a foto. Mathieu diz que é a foto mais bonita do Carnaval, e Linu a mostra para todo mundo.',
            ending: {
              tone: 'bom',
              title: 'Photo avec le Bonhomme',
              message: 'Você acompanhou o discurso indireto (“Mathieu dit que…”, “il demande si…”) e o subjuntivo com “vouloir que”: “Voulez-vous que je vous prenne en photo?”',
            },
          },
        },
      },
      {
        id: 'fr-ca-h3',
        variant: 'fr-CA',
        level: 'B2.2',
        cefr: 'B2',
        title: 'Traversée annulée à Percé',
        emoji: '🪨',
        summary: 'Na Gaspésie, o barco para a ilha Bonaventure é cancelado por causa do vento, e Linu precisa resolver a situação com a bilheteria, num francês bem formal.',
        cultural_context:
          'A Gaspésie é a península no leste do Quebec, onde o rio São Lourenço se abre para o golfo. Em frente à vila de Percé ergue-se o rochedo Percé, com um grande arco escavado pelo mar. A pouca distância fica a ilha Bonaventure, parque nacional que abriga uma das maiores colônias de gansos-patolas (fous de Bassan) do mundo. As travessias de barco dependem do tempo e são canceladas quando o vento é forte demais.',
        start: 'start',
        glossary: [
          ['les traversées sont annulées', 'as travessias foram canceladas (voz passiva)'],
          ['les passagers seront remboursés', 'os passageiros serão reembolsados (voz passiva)'],
          ['la demande doit être faite', 'o pedido deve ser feito (voz passiva)'],
          ['Madame, Monsieur,', 'Prezados senhores, (abertura formal)'],
          ["Je vous prie d'agréer l'expression de mes salutations distinguées.", 'Atenciosamente. (fecho formal)'],
          ['en raison de', 'em razão de, por causa de'],
          ['un fou de Bassan', 'um ganso-patola'],
          ['le courriel', 'o e-mail (Quebec)'],
        ],
        nodes: {
          start: {
            emoji: '⛴️',
            text: "Percé, en Gaspésie. Depuis le quai, Linu admire le rocher Percé et, plus loin, l'île Bonaventure. Il a réservé une place sur le bateau de dix heures pour voir les fous de Bassan. Mais sur la porte de la billetterie, une affiche indique : “ Avis à la clientèle : en raison des vents, les traversées du matin sont annulées. Les passagers seront remboursés ou replacés sur un départ ultérieur. ”",
            translation:
              'Percé, na Gaspésie. Do cais, Linu admira o rochedo Percé e, mais adiante, a ilha Bonaventure. Ele reservou um lugar no barco das dez para ver os gansos-patolas. Mas, na porta da bilheteria, um cartaz avisa: “Aviso aos clientes: em razão dos ventos, as travessias da manhã foram canceladas. Os passageiros serão reembolsados ou realocados numa saída posterior.”',
            choices: [
              { text: 'Linu entre à la billetterie pour se renseigner.', translation: 'Linu entra na bilheteria para se informar.', next: 'billetterie' },
              {
                text: 'Linu comprend que le bateau partira plus tôt.',
                translation: 'Linu entende que o barco vai sair mais cedo.',
                wrong: '“Les traversées du matin sont annulées”: as travessias da manhã foram CANCELADAS por causa do vento (“en raison des vents”). Ninguém sai mais cedo!',
              },
            ],
          },
          billetterie: {
            emoji: '🎫',
            text: "La préposée lui explique poliment : “ Votre billet peut être échangé contre une place demain matin, si la météo le permet. Vous pouvez également demander un remboursement ; dans ce cas, la demande doit être faite par courriel, en indiquant votre numéro de réservation. ”",
            translation:
              'A atendente explica educadamente: “Sua passagem pode ser trocada por um lugar amanhã de manhã, se o tempo permitir. O senhor também pode pedir o reembolso; nesse caso, o pedido deve ser feito por e-mail, com o número da reserva.”',
            choices: [
              { text: 'Linu échange son billet pour demain matin.', translation: 'Linu troca a passagem para amanhã de manhã.', next: 'demain' },
              { text: 'Linu demande le remboursement par courriel.', translation: 'Linu pede o reembolso por e-mail.', next: 'courriel' },
            ],
          },
          courriel: {
            emoji: '💻',
            text: "Dans un café du village, Linu ouvre son ordinateur. Il s'agit d'une demande officielle : il faut choisir le bon registre. Comment commence-t-il son courriel ?",
            translation:
              'Num café da vila, Linu abre o computador. É um pedido oficial: é preciso escolher o registro certo. Como ele começa o e-mail?',
            choices: [
              {
                text: '“ Madame, Monsieur, je me permets de vous écrire au sujet de ma réservation numéro 4127, dont la traversée a été annulée ce matin. ”',
                translation: '“Prezados senhores, tomo a liberdade de lhes escrever a respeito da minha reserva número 4127, cuja travessia foi cancelada hoje de manhã.”',
                next: 'envoye',
              },
              {
                text: "“ Salut la gang ! C'est plate, votre bateau est pas parti… ”",
                translation: '“Oi, galera! Que chato, o barco de vocês não saiu…”',
                wrong: "Um pedido de reembolso à empresa de barcos pede registro formal: “Madame, Monsieur”, “je me permets de vous écrire”. Gírias como “la gang” e “c'est plate” ficam para os amigos.",
              },
            ],
          },
          envoye: {
            emoji: '📨',
            text: "Linu termine son courriel par la formule : “ Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées. ” Une heure plus tard, il reçoit une réponse : “ Votre demande a été acceptée. Le montant sera remboursé sur votre carte d'ici dix jours ouvrables. ”",
            translation:
              'Linu termina o e-mail com a fórmula: “Atenciosamente.” Uma hora depois, recebe a resposta: “Seu pedido foi aceito. O valor será reembolsado no seu cartão em até dez dias úteis.”',
            choices: [
              { text: 'Linu décide de partir pour le parc national Forillon.', translation: 'Linu decide partir para o parque nacional Forillon.', next: 'final_forillon' },
              { text: 'Linu achète quand même un billet pour le lendemain.', translation: 'Linu compra mesmo assim uma passagem para o dia seguinte.', next: 'demain' },
            ],
          },
          demain: {
            emoji: '🌅',
            text: "Le lendemain, la mer est calme. Le bateau fait le tour du rocher Percé, puis les passagers sont déposés sur l'île. Un guide annonce : “ Le sentier est balisé. Il est strictement interdit de s'approcher des oiseaux : la colonie est protégée par la loi. ”",
            translation:
              'No dia seguinte, o mar está calmo. O barco dá a volta no rochedo Percé, e depois os passageiros são deixados na ilha. Um guia avisa: “A trilha é sinalizada. É terminantemente proibido se aproximar das aves: a colônia é protegida por lei.”',
            choices: [
              { text: 'Linu suit le sentier balisé.', translation: 'Linu segue a trilha sinalizada.', next: 'final_fous' },
              { text: 'Linu quitte le sentier pour photographier les oiseaux de plus près.', translation: 'Linu sai da trilha para fotografar as aves mais de perto.', next: 'final_garde' },
              {
                text: 'Le guide invite les visiteurs à nourrir les oiseaux.',
                translation: 'O guia convida os visitantes a alimentar as aves.',
                wrong: "“Il est strictement interdit de s'approcher des oiseaux”: é proibido até CHEGAR PERTO das aves. “La colonie est protégée par la loi” (voz passiva): a colônia é protegida por lei.",
              },
            ],
          },
          final_fous: {
            emoji: '🐦',
            text: "Au bout du sentier, Linu découvre la falaise : des dizaines de milliers de fous de Bassan, blancs comme la neige, crient, plongent et volent au-dessus de la mer. “ Ça valait bien une journée d'attente ! ”, pense-t-il.",
            translation:
              'No fim da trilha, Linu descobre o penhasco: dezenas de milhares de gansos-patolas, brancos como a neve, gritam, mergulham e voam sobre o mar. “Valeu a pena esperar um dia!”, pensa ele.',
            ending: {
              tone: 'bom',
              title: 'La colonie de Bonaventure',
              message: 'Você entendeu os avisos oficiais na voz passiva: “les traversées sont annulées”, “les passagers seront remboursés”, “la colonie est protégée par la loi”.',
            },
          },
          final_garde: {
            emoji: '🚫',
            text: "Une garde-parc arrive aussitôt : “ Monsieur, vous êtes prié de regagner le sentier immédiatement. Les oiseaux ne doivent pas être dérangés pendant la saison de nidification. ” Linu s'excuse et revient sur le sentier, un peu honteux.",
            translation:
              'Uma guarda-parque chega na mesma hora: “Senhor, pedimos que volte imediatamente para a trilha. As aves não devem ser perturbadas durante a época de nidificação.” Linu pede desculpas e volta para a trilha, meio envergonhado.',
            ending: {
              tone: 'neutro',
              title: "Rappel à l'ordre",
              message: '“Vous êtes prié de…” é a forma educada e firme da administração para dar uma ordem. Nos parques nacionais, respeitar a trilha é regra.',
            },
          },
          final_forillon: {
            emoji: '🦭',
            text: "Au parc national Forillon, Linu marche jusqu'au cap Gaspé, qu'on surnomme “ le bout du monde ”. En bas des falaises, des phoques se reposent sur les rochers. Linu leur fait un signe de l'aile : entre animaux marins, on se comprend !",
            translation:
              'No parque nacional Forillon, Linu caminha até o cabo Gaspé, apelidado de “o fim do mundo”. Lá embaixo, ao pé dos penhascos, focas descansam nas pedras. Linu acena para elas com a asa: entre bichos do mar, a gente se entende!',
            ending: {
              tone: 'bom',
              title: 'Au bout du monde',
              message: "Um e-mail formal bem escrito resolveu tudo: “Madame, Monsieur”, “je me permets de vous écrire”, “je vous prie d'agréer…”. E a Gaspésie ainda guardava outra surpresa.",
            },
          },
        },
      },
    ],
  },
  // ───────────────────────── Bélgica ─────────────────────────
  {
    code: 'fr-BE',
    country: 'BEL',
    kind: 'dialeto',
    speechLocale: 'fr-BE',
    name: 'Francês da Bélgica',
    flag: '🇧🇪',
    summary:
      'O francês de Bruxelas e da Valônia: a mesma gramática da França, com “septante” e “nonante”, refeições com outros nomes (“dîner” ao meio-dia) e palavras próprias, os “belgicismos”, como “GSM”, “kot” e “drache”.',
    card: {
      id: 'fr-be-c1',
      title: 'Septante, nonante e um beijo só',
      emoji: '🇧🇪',
      history:
        'A Bélgica tem três línguas oficiais: o neerlandês, falado em Flandres, no norte; o francês, falado na Valônia, no sul; e o alemão, falado por uma pequena comunidade no leste. Bruxelas, a capital, é oficialmente bilíngue (francês e neerlandês), mas a maioria dos moradores usa o francês no dia a dia. Os francófonos são cerca de 4 em cada 10 belgas. Antes de o francês se impor na fala de todos, os valões falavam línguas regionais, como o valão e o picardo; elas sobrevivem no teatro de marionetes, nas canções e entre os mais velhos. Bruxelas também abriga as principais instituições da União Europeia, e por isso se ouvem ali dezenas de línguas.',
      culture_tip:
        'Entre amigos, na Bélgica, costuma-se dar um beijo só no rosto, e não dois, como em Paris. As refeições mudam de nome: “déjeuner” é o café da manhã, “dîner” é o almoço e “souper” é o jantar. As batatas fritas se compram numa “friterie” (ou “fritkot”), servidas num cone de papel com um molho à escolha, e os belgas levam a sério a cerveja e a história em quadrinhos: Bruxelas tem dezenas de murais de BD nas paredes dos prédios.',
      grammar_why:
        "A gramática é a mesma da França; mudam os números, algumas palavras e alguns usos. (1) 70 é “septante” e 90 é “nonante”, mas 80 continua “quatre-vingts”: “septante-deux” = 72, “nonante-neuf” = 99; (2) “savoir” pode significar “conseguir, ter como”: “Je ne sais pas venir demain” = não posso ir amanhã; (3) “s'il vous plaît” também se diz ao entregar alguma coisa, no lugar de “voilà”, e “à tantôt” quer dizer “até mais tarde”. Reconheça esses belgicismos; no app seguimos o padrão da França.",
      grammar_examples: [
        ["Ça fait septante-cinq euros, s'il vous plaît.", 'Dá setenta e cinco euros, por favor. (França: soixante-quinze)'],
        ['Je ne sais pas venir ce soir, désolé.', 'Não posso ir hoje à noite, desculpe. (França: je ne peux pas)'],
        ['Chez nous, on dîne à midi et on soupe à sept heures.', 'Aqui em casa, almoçamos ao meio-dia e jantamos às sete. (França: on déjeune… on dîne)'],
        ["Tenez, votre frite, s'il vous plaît !", 'Aqui está a sua porção de fritas! (França: voilà)'],
        ['À tantôt, les amis !', "Até mais tarde, pessoal! (França: à tout à l'heure)"],
      ],
      character_guide: null,
    },
    pronunciation: [
      'Muita gente pronuncia o “t” de “vingt” mesmo quando a palavra está sozinha ou no fim da frase: [vɛ̃t], e não [vɛ̃] como em Paris.',
      'A Bélgica conserva distinções que Paris perdeu: “brin” [bʁɛ̃] × “brun” [bʁœ̃], com duas vogais nasais diferentes, e “patte” × “pâte”, com o “â” mais longo e mais posterior.',
      'Vogais longas podem marcar o feminino: “aimée” soa mais longo que “aimé”, e “amie” mais longo que “ami”. Em Paris, os pares soam iguais.',
      'Em muitas palavras, o [ɥ] de “huit” e “lui” soa [w], como em “oui”: “huit” vira [wit].',
      'No fim da palavra, as consoantes sonoras tendem a ensurdecer: “grande” soa quase “grante”, e “rouge”, quase “rouche”.',
    ],
    vocab: [
      ['soixante-dix', 'septante', 'setenta', 'também na Suíça'],
      ['quatre-vingt-dix', 'nonante', 'noventa', '80 continua “quatre-vingts” na Bélgica'],
      ['petit-déjeuner', 'déjeuner', 'café da manhã'],
      ['déjeuner', 'dîner', 'almoço', 'também na Suíça e no Quebec'],
      ['dîner', 'souper', 'jantar'],
      ['téléphone portable', 'GSM', 'celular', 'lê-se letra por letra: [ʒeɛsɛm]'],
      ["chambre d'étudiant", 'kot', 'quarto de estudante', 'do flamengo; quem mora num kot é um “kotteur”'],
      ['averse, forte pluie', 'drache', 'toró, temporal', '“il drache” = está caindo um toró'],
      ['endive', 'chicon', 'endívia', 'o “chicon au gratin” é um clássico da cozinha belga'],
      ['petit pain', 'pistolet', 'pãozinho redondo'],
      ['serviette de bain', 'essuie', 'toalha de banho'],
      ['serpillière', 'loque', 'pano de chão'],
      ['fermeture éclair', 'tirette', 'zíper'],
      ['chemise (en carton)', 'farde', 'pasta de papel'],
      ["frais d'inscription", 'minerval', 'taxa de matrícula'],
      ['maire', 'bourgmestre', 'prefeito', 'os “échevins” são os membros eleitos do governo municipal'],
      ["à tout à l'heure", 'à tantôt', 'até mais tarde', 'na França, “tantôt” soa antiquado'],
      ['bazar, désordre', 'brol', 'bagunça, tralha', 'do neerlandês de Bruxelas'],
      ['pouvoir (être capable)', 'savoir', 'poder, conseguir', '“Je ne sais pas venir” = não posso ir'],
      ['voilà (en donnant)', "s'il vous plaît", 'aqui está', 'dito ao entregar algo, como o garçom ao servir'],
      ['clignotant', 'clignoteur', 'pisca-pisca (do carro)'],
      ['sac à main', 'sacoche', 'bolsa (de mão)'],
    ],
    stories: [
      {
        id: 'fr-be-h1',
        variant: 'fr-BE',
        level: 'B1.1',
        cefr: 'B1',
        title: 'Une frite à Bruxelles',
        emoji: '🍟',
        summary: 'Em Bruxelas, o Linu descobre que “dîner” é ao meio-dia, compra a sua primeira porção de fritas belgas e é pego por uma “drache”.',
        cultural_context:
          'A Grand-Place de Bruxelas, cercada de fachadas douradas das antigas corporações e da Prefeitura gótica, é Patrimônio Mundial da UNESCO. A poucos passos fica o Manneken-Pis, uma pequena estátua de bronze de um menino que tem mais de mil roupas, vestidas em dias de festa. Mais ao norte, o Atomium, construído para a Exposição Universal de 1958, representa um cristal de ferro ampliado 165 bilhões de vezes.',
        start: 'start',
        glossary: [
          ['il faisait beau', 'fazia tempo bom (imparfait: cenário)'],
          ['il est arrivé', 'ele chegou (passé composé: ação)'],
          ["j'y vais", 'eu vou lá (y = lá)'],
          ["je l'emporte", "eu a levo (l' = la frite)"],
          ['lui', 'a ele, a ela (COI)'],
          ['dîner', 'almoçar (Bélgica)'],
          ['une frite', 'uma porção de fritas (Bélgica)'],
          ['il drache', 'está caindo um toró (Bélgica)'],
        ],
        nodes: {
          start: {
            emoji: '🚆',
            text: "Linu est arrivé à la gare Centrale de Bruxelles. Sur son GSM, il y a un message de son ami Lucas : “ Je t'attends sur la Grand-Place. Tu y vas à pied, c'est à cinq minutes ! ”",
            translation: 'O Linu chegou à estação Central de Bruxelas. No celular, há uma mensagem do seu amigo Lucas: “Estou te esperando na Grand-Place. Vai a pé, fica a cinco minutos!”',
            choices: [
              { text: "“ OK, j'y vais tout de suite ! ”", translation: '“Beleza, já vou para lá!”', next: 'grandplace' },
              {
                text: 'Linu attend Lucas à la gare.',
                translation: 'O Linu espera o Lucas na estação.',
                wrong: "“Je t'attends sur la Grand-Place”: é o Lucas que espera o Linu, e na praça. E “tu y vas à pied” manda o Linu ir até lá (“y” = lá, na Grand-Place).",
              },
            ],
          },
          grandplace: {
            emoji: '🏛️',
            text: "Quand Linu est arrivé sur la Grand-Place, il faisait beau et les façades dorées brillaient au soleil. Il y avait des touristes partout. Lucas l'a vu et lui a fait une seule bise : “ Chez nous, on en fait une, pas deux ! Bon, il est midi : on va dîner ? ”",
            translation: 'Quando o Linu chegou à Grand-Place, fazia tempo bom e as fachadas douradas brilhavam ao sol. Havia turistas por toda parte. O Lucas o viu e lhe deu um beijo só: “Aqui a gente dá um, não dois! Bom, é meio-dia: vamos almoçar?”',
            choices: [{ text: '“ Dîner ? Mais il est midi ! ”', translation: '“Jantar? Mas é meio-dia!”', next: 'diner' }],
          },
          diner: {
            emoji: '🕛',
            text: "Lucas rit : “ En Belgique, le matin on déjeune, à midi on dîne et le soir on soupe. ” Puis il demande : “ Qu'est-ce que tu préfères ? Une frite, ou d'abord le Manneken-Pis ? Il est juste à côté. ”",
            translation: 'O Lucas ri: “Na Bélgica, de manhã a gente toma o café (‘déjeune’), ao meio-dia almoça (‘dîne’) e à noite janta (‘soupe’).” Depois pergunta: “O que você prefere? Uma porção de fritas, ou primeiro o Manneken-Pis? Fica aqui do lado.”',
            choices: [
              { text: '“ Une frite, bien sûr ! ”', translation: '“Fritas, claro!”', next: 'frites' },
              { text: '“ Montre-moi le Manneken-Pis ! ”', translation: '“Me mostra o Manneken-Pis!”', next: 'manneken' },
            ],
          },
          frites: {
            emoji: '🍟',
            text: "Dans la friterie, Linu commande : “ Une grande frite avec de la mayonnaise, s'il vous plaît. ” Le vendeur lui demande : “ Vous la mangez ici ou vous l'emportez ? ”",
            translation: 'Na friterie, o Linu pede: “Uma porção grande de fritas com maionese, por favor.” O vendedor lhe pergunta: “O senhor vai comer aqui ou vai levar?”',
            choices: [
              { text: "“ Je l'emporte, merci. ”", translation: '“Vou levar, obrigado.”', next: 'cornet' },
              {
                text: '“ Je lui emporte, merci. ”',
                translation: '“Levo para ele, obrigado.”',
                wrong: "“La frite” é o objeto direto (COD) de “emporter”: “je l'emporte” (l' = la frite). “Lui” é objeto indireto (a ele, a ela) e não cabe aqui.",
              },
            ],
          },
          cornet: {
            emoji: '🤔',
            text: "Le vendeur lui donne un grand cornet de papier et dit : “ S'il vous plaît ! ” Linu ne comprend pas : pourquoi “ s'il vous plaît ” ? Lucas lui explique : “ Ici, on le dit quand on donne quelque chose. C'est comme ‘ voilà ’. ” Ils mangeaient leurs frites devant la Bourse quand le ciel est devenu tout noir.",
            translation: 'O vendedor lhe dá um grande cone de papel e diz: “Aqui está!” O Linu não entende: por que “por favor”? O Lucas lhe explica: “Aqui a gente diz isso quando entrega alguma coisa. É como ‘voilà’.” Eles comiam as fritas em frente à Bolsa quando o céu ficou todo preto.',
            choices: [{ text: 'Linu regarde le ciel.', translation: 'O Linu olha para o céu.', next: 'drache' }],
          },
          manneken: {
            emoji: '⛲',
            text: "Le Manneken-Pis était beaucoup plus petit que Linu ne l'imaginait ! Ce jour-là, il portait un costume de pompier. Lucas lui a raconté : “ Il a plus de mille costumes. On les garde dans un musée. ” Pendant qu'ils regardaient la statue, le ciel est devenu tout noir.",
            translation: 'O Manneken-Pis era muito menor do que o Linu imaginava! Naquele dia, ele estava vestido de bombeiro. O Lucas lhe contou: “Ele tem mais de mil roupas. Elas ficam guardadas num museu.” Enquanto olhavam a estátua, o céu ficou todo preto.',
            choices: [{ text: 'Linu regarde le ciel.', translation: 'O Linu olha para o céu.', next: 'drache' }],
          },
          drache: {
            emoji: '🌧️',
            text: "“ Oh non, il drache ! ”, crie Lucas. En Belgique, “ dracher ”, c'est pleuvoir très fort. En quelques secondes, les rues sont pleines d'eau. Lucas propose : “ On entre dans un café ? Ou on prend le métro jusqu'à l'Atomium ? ”",
            translation: '“Ah, não, está caindo um toró!”, grita o Lucas. Na Bélgica, “dracher” é chover muito forte. Em poucos segundos, as ruas estão cheias de água. O Lucas propõe: “Vamos entrar num café? Ou pegamos o metrô até o Atomium?”',
            choices: [
              { text: '“ Entrons dans ce café ! ”', translation: '“Vamos entrar neste café!”', next: 'final_cafe' },
              { text: '“ Prenons le métro ! ”', translation: '“Vamos pegar o metrô!”', next: 'final_atomium' },
              { text: "“ Moi, j'adore la pluie. Continuons à pied ! ”", translation: '“Eu adoro chuva. Vamos continuar a pé!”', next: 'final_pluie' },
            ],
          },
          final_cafe: {
            emoji: '☕',
            text: "Dans le café, il faisait chaud. Lucas a commandé deux chocolats chauds et le serveur les a posés sur la table : “ S'il vous plaît ! ” Cette fois, Linu a compris. “ Merci ! À Bruxelles, même la pluie est sympathique. ”",
            translation: 'No café, estava quentinho. O Lucas pediu dois chocolates quentes e o garçom os pôs na mesa: “Aqui está!” Desta vez, o Linu entendeu. “Obrigado! Em Bruxelas, até a chuva é simpática.”',
            ending: {
              tone: 'bom',
              title: 'Chocolate contra a drache',
              message: "Você acompanhou o passado com o imparfait (“il faisait beau”, “ils mangeaient”) e o passé composé (“il est arrivé”, “le ciel est devenu noir”), e aprendeu três belgicismos: “dîner”, “dracher” e o “s'il vous plaît” de quem entrega.",
            },
          },
          final_atomium: {
            emoji: '⚛️',
            text: "Quand ils sont sortis du métro, la pluie s'était arrêtée. L'Atomium brillait devant eux, énorme. “ On l'a construit pour l'Exposition universelle de 1958 ”, a expliqué Lucas. Linu l'a pris en photo sous un bel arc-en-ciel.",
            translation: 'Quando saíram do metrô, a chuva tinha parado. O Atomium brilhava na frente deles, enorme. “Ele foi construído para a Exposição Universal de 1958”, explicou o Lucas. O Linu o fotografou debaixo de um belo arco-íris.',
            ending: {
              tone: 'bom',
              title: 'Arco-íris no Atomium',
              message: "Boa escolha! Você entendeu os pronomes em ação: “on l'a construit”, “Linu l'a pris en photo” (l' = l'Atomium).",
            },
          },
          final_pluie: {
            emoji: '💦',
            text: "Ils ont marché sous la pluie pendant une heure. Lucas était trempé et de mauvaise humeur. Linu, lui, était ravi : pour un pingouin, une drache belge, c'est presque la plage !",
            translation: 'Eles andaram debaixo de chuva durante uma hora. O Lucas estava encharcado e de mau humor. Já o Linu estava encantado: para um pinguim, uma drache belga é quase uma praia!',
            ending: {
              tone: 'neutro',
              title: 'Pinguim feliz, amigo molhado',
              message: 'O Linu se divertiu, mas o Lucas nem tanto. Da próxima vez, quando “il drache”, que tal um café?',
            },
          },
        },
      },
      {
        id: 'fr-be-h2',
        variant: 'fr-BE',
        level: 'B1.4',
        cefr: 'B1',
        title: 'Les marches de Liège',
        emoji: '🧇',
        summary: 'Em Liège, a amiga Manon quer que o Linu prove tudo: a gaufre, o xarope de Liège, os boulets da mãe dela… e ainda suba os 374 degraus da Montagne de Bueren.',
        cultural_context:
          'Liège, às margens do rio Mosa (a Meuse, em francês), é chamada de “Cité ardente”, a cidade ardente. Todo domingo de manhã, o mercado de La Batte se estende ao longo do rio. A cidade é a terra da gaufre de Liège, feita com pérolas de açúcar, e dos “boulets à la liégeoise”, almôndegas com um molho agridoce de xarope de Liège. A escadaria da Montagne de Bueren tem 374 degraus e sobe do centro até as colinas da antiga cidadela.',
        start: 'start',
        glossary: [
          ['il faut que tu goûtes', 'você precisa provar (subjuntivo)'],
          ['je veux que tu viennes', 'quero que você venha'],
          ['je suis content que vous soyez là', 'estou contente que vocês estejam aqui'],
          ['je doute que tu arrives', 'duvido que você chegue'],
          ['il dit que…', 'ele diz que… (discurso indireto)'],
          ['le sirop de Liège', 'o xarope de Liège (de pera e maçã)'],
          ['les boulets', 'as almôndegas'],
          ['les marches', 'os degraus'],
        ],
        nodes: {
          start: {
            emoji: '🚉',
            text: "C'est dimanche matin. Linu arrive à la gare de Liège-Guillemins, toute blanche et en verre. Son amie Manon l'attend sur le quai : “ Bienvenue dans la Cité ardente ! Avant de visiter quoi que ce soit, il faut que tu goûtes une vraie gaufre de Liège. ”",
            translation: 'É domingo de manhã. O Linu chega à estação de Liège-Guillemins, toda branca e de vidro. A amiga Manon o espera na plataforma: “Bem-vindo à Cidade Ardente! Antes de visitar qualquer coisa, você precisa provar uma verdadeira gaufre de Liège.”',
            choices: [
              { text: "“ Avec plaisir, j'ai faim ! ”", translation: '“Com prazer, estou com fome!”', next: 'gaufre' },
              {
                text: 'Manon veut que Linu visite la ville avant de manger.',
                translation: 'A Manon quer que o Linu visite a cidade antes de comer.',
                wrong: '“Avant de visiter quoi que ce soit, il faut que tu goûtes une gaufre”: primeiro a gaufre, depois a visita. “Il faut que” + subjuntivo (“tu goûtes”) indica o que é preciso fazer.',
              },
            ],
          },
          gaufre: {
            emoji: '🧇',
            text: "La gaufre est chaude et croquante, avec des perles de sucre qui fondent dans la bouche. Le téléphone de Manon sonne. Elle écoute, puis explique : “ C'est mon frère Julien. Il dit qu'il est au marché de la Batte et qu'il veut qu'on le rejoigne. ”",
            translation: 'A gaufre está quente e crocante, com pérolas de açúcar que derretem na boca. O telefone da Manon toca. Ela escuta e depois explica: “É o meu irmão, o Julien. Ele diz que está no mercado de La Batte e que quer que a gente o encontre lá.”',
            choices: [
              { text: '“ Allons le rejoindre ! ”', translation: '“Vamos encontrá-lo!”', next: 'batte' },
              { text: "“ Je préfère voir les 374 marches d'abord. ”", translation: '“Prefiro ver os 374 degraus primeiro.”', next: 'bueren' },
            ],
          },
          batte: {
            emoji: '🧺',
            text: "Le long de la Meuse, le marché est immense : fruits, légumes, fromages, fleurs et vêtements. Julien les accueille : “ Je suis content que vous soyez venus ! Tenez, il faut que vous goûtiez ce sirop de Liège. ” Puis il ajoute : “ Maman veut que Linu vienne dîner à midi. Elle fait des boulets. ”",
            translation: 'Ao longo do Mosa, o mercado é imenso: frutas, verduras, queijos, flores e roupas. O Julien os recebe: “Que bom que vocês vieram! Tomem, vocês precisam provar este xarope de Liège.” Depois acrescenta: “A mamãe quer que o Linu venha almoçar ao meio-dia. Ela vai fazer boulets.”',
            choices: [
              { text: '“ Dis-lui que je viens avec plaisir ! ”', translation: '“Diga a ela que eu vou com prazer!”', next: 'boulets' },
              {
                text: 'Linu comprend que la maman de Julien vient au marché.',
                translation: 'O Linu entende que a mãe do Julien vem ao mercado.',
                wrong: '“Maman veut que Linu vienne dîner”: é o Linu que deve ir (“vienne”, subjuntivo de “venir”) almoçar na casa dela. E na Bélgica, “dîner” ao meio-dia é o almoço.',
              },
            ],
          },
          boulets: {
            emoji: '🍲',
            text: "Chez la maman de Julien et de Manon, les boulets baignent dans une sauce brune, sucrée et salée, avec des frites. “ Je veux que tu en reprennes ! ”, dit-elle. Après le repas, elle sourit : “ Maintenant, il faut que vous montiez la Montagne de Bueren pour digérer. ”",
            translation: 'Na casa da mãe do Julien e da Manon, as almôndegas vêm mergulhadas num molho escuro, doce e salgado, com fritas. “Quero que você repita!”, diz ela. Depois da refeição, ela sorri: “Agora vocês precisam subir a Montagne de Bueren para fazer a digestão.”',
            choices: [{ text: "Ils vont au pied de l'escalier.", translation: 'Eles vão até o pé da escadaria.', next: 'bueren' }],
          },
          bueren: {
            emoji: '🪜',
            text: "Au pied de l'escalier, Linu lève la tête : les marches montent tout droit vers le ciel. Manon rit : “ Je doute que tu arrives en haut sans t'arrêter. Il est possible que tu aies besoin d'une pause ! ”",
            translation: 'Ao pé da escadaria, o Linu levanta a cabeça: os degraus sobem em linha reta até o céu. A Manon ri: “Duvido que você chegue lá em cima sem parar. Pode ser que você precise de uma pausa!”',
            choices: [
              { text: 'Linu monte les marches en courant, sans pause.', translation: 'O Linu sobe os degraus correndo, sem pausa.', next: 'final_souffle' },
              { text: 'Linu monte tranquillement, avec des pauses.', translation: 'O Linu sobe com calma, fazendo pausas.', next: 'final_vue' },
            ],
          },
          final_souffle: {
            emoji: '🥵',
            text: "Linu arrive en haut le premier, mais il est tout rouge et ne peut plus parler. Manon arrive cinq minutes après : “ Je ne crois pas que les pingouins soient faits pour les escaliers ! ”",
            translation: 'O Linu chega lá em cima primeiro, mas está vermelho e não consegue mais falar. A Manon chega cinco minutos depois: “Não acho que os pinguins tenham sido feitos para escadarias!”',
            ending: {
              tone: 'neutro',
              title: 'Sem fôlego',
              message: 'O Linu venceu a corrida, mas perdeu o fôlego. Repare no subjuntivo depois da dúvida: “je doute que tu arrives”, “je ne crois pas que les pingouins soient…”.',
            },
          },
          final_vue: {
            emoji: '🌇',
            text: "Ils s'arrêtent trois fois pour boire de l'eau. En haut, toute la ville est à leurs pieds : les toits, les églises et la Meuse qui brille. Manon dit : “ Je suis contente que tu aies vu Liège d'ici. Il faut que tu reviennes pour le 15 août, c'est la grande fête d'Outremeuse ! ”",
            translation: 'Eles param três vezes para beber água. Lá em cima, a cidade inteira está aos seus pés: os telhados, as igrejas e o Mosa brilhando. A Manon diz: “Estou contente que você tenha visto Liège daqui. Você precisa voltar no dia 15 de agosto, é a grande festa de Outremeuse!”',
            ending: {
              tone: 'bom',
              title: 'Liège aos seus pés',
              message: "Você acompanhou o subjuntivo nos desejos, na obrigação e nas emoções (“il faut que tu goûtes”, “je veux que tu viennes”, “je suis contente que tu aies vu”) e o discurso indireto: “il dit qu'il est au marché”.",
            },
          },
        },
      },
      {
        id: 'fr-be-h3',
        variant: 'fr-BE',
        level: 'B2.2',
        cefr: 'B2',
        title: 'Un passeport dans les Ardennes',
        emoji: '🛶',
        summary: 'Depois de descer o rio Semois de caiaque, o Linu percebe que perdeu o passaporte e precisa enfrentar a polícia, a administração comunal e um e-mail formal ao consulado.',
        cultural_context:
          'As Ardenas belgas, no sul da Valônia, são uma região de florestas e rios sinuosos, muito procurada para caminhadas e passeios de caiaque. Em Bouillon, o castelo de Godofredo de Bulhão domina um meandro do rio Semois. Na Bélgica, cada município tem a sua “administration communale”, dirigida pelo “bourgmestre” e pelos “échevins”; a embaixada do Brasil fica em Bruxelas.',
        start: 'start',
        glossary: [
          ['la déclaration de perte', 'o boletim de perda'],
          ['votre déclaration va être enregistrée', 'o seu boletim vai ser registrado (voz passiva)'],
          ['une attestation vous sera remise', 'um atestado será entregue ao senhor'],
          ['Veuillez…', 'Queira… (formal)'],
          ["l'administration communale", 'a prefeitura (Bélgica)'],
          ['Madame, Monsieur,', 'Prezados senhores, (abertura formal)'],
          ["Je vous prie d'agréer…", 'Atenciosamente… (fecho formal)'],
          ['les objets trouvés', 'os achados e perdidos'],
        ],
        nodes: {
          start: {
            emoji: '🏰',
            text: "Après une belle descente de la Semois en kayak, Linu arrive à Bouillon, au pied du château. Il cherche son passeport dans son sac étanche… Le passeport n'y est plus ! Un guide lui conseille : “ Il faut d'abord faire une déclaration de perte au commissariat. ”",
            translation: 'Depois de uma bela descida do Semois de caiaque, o Linu chega a Bouillon, ao pé do castelo. Ele procura o passaporte na bolsa estanque… O passaporte não está mais lá! Um guia o aconselha: “Primeiro é preciso fazer um boletim de perda na delegacia.”',
            choices: [
              { text: 'Linu va au commissariat.', translation: 'O Linu vai à delegacia.', next: 'police' },
              {
                text: 'Linu prend le train pour Paris, où se trouve le consulat.',
                translation: 'O Linu pega o trem para Paris, onde fica o consulado.',
                wrong: "O guia disse que o primeiro passo é a delegacia (“d'abord… au commissariat”). E o Linu está na Bélgica: os serviços consulares do Brasil ficam na embaixada, em Bruxelas, e não em Paris.",
              },
            ],
          },
          police: {
            emoji: '👮',
            text: "Au commissariat, un agent le reçoit : “ Bonjour, monsieur. Veuillez vous asseoir. Votre déclaration va être enregistrée, puis une attestation de perte vous sera remise. ” Linu voudrait savoir ce qu'il doit faire ensuite.",
            translation: 'Na delegacia, um policial o recebe: “Bom dia, senhor. Queira sentar-se. O seu boletim vai ser registrado, e depois um atestado de perda será entregue ao senhor.” O Linu gostaria de saber o que deve fazer em seguida.',
            choices: [
              { text: '“ Pourriez-vous me dire quelles démarches je dois faire ensuite ? ”', translation: '“O senhor poderia me dizer que providências devo tomar em seguida?”', next: 'attestation' },
              {
                text: '“ Et après, je fais quoi, mon vieux ? ”',
                translation: '“E depois, eu faço o quê, meu chapa?”',
                wrong: 'Com um policial, numa repartição, fala-se no registro formal: “vous”, o condicional de cortesia (“pourriez-vous”) e nada de “mon vieux”, que é coisa de amigos.',
              },
            ],
          },
          attestation: {
            emoji: '📄',
            text: "“ Cette attestation a été établie ce jour. Elle devra être présentée aux services consulaires de votre ambassade, à Bruxelles. Par ailleurs, les objets trouvés sont déposés à l'administration communale : vous pourriez vous y renseigner. ”",
            translation: '“Este atestado foi emitido hoje. Ele deverá ser apresentado aos serviços consulares da sua embaixada, em Bruxelas. Além disso, os objetos achados são entregues na prefeitura: o senhor poderia se informar lá.”',
            choices: [
              { text: "Linu va à l'administration communale.", translation: 'O Linu vai à prefeitura.', next: 'commune' },
              { text: "Linu écrit d'abord un courriel à l'ambassade.", translation: 'O Linu escreve primeiro um e-mail para a embaixada.', next: 'courriel' },
            ],
          },
          courriel: {
            emoji: '📧',
            text: "Linu commence son courriel : “ Madame, Monsieur, Je me permets de vous écrire afin de vous signaler la perte de mon passeport, survenue le 12 juillet à Bouillon. Une déclaration a été faite auprès de la police locale. Je souhaiterais obtenir un rendez-vous. ” Il lui manque la formule finale.",
            translation: 'O Linu começa o e-mail: “Prezados senhores, Tomo a liberdade de lhes escrever para comunicar a perda do meu passaporte, ocorrida no dia 12 de julho em Bouillon. Um boletim foi feito junto à polícia local. Gostaria de obter um horário de atendimento.” Falta a fórmula de encerramento.',
            choices: [
              {
                text: "“ Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées. ”",
                translation: '“Atenciosamente.” (literalmente: “Peço-lhes que aceitem, senhora, senhor, a expressão das minhas saudações distintas.”)',
                next: 'reponse',
              },
              {
                text: '“ Bisous et à tantôt ! ”',
                translation: '“Beijos e até mais tarde!”',
                wrong: "Um e-mail a uma embaixada pede o registro formal do começo ao fim. “Bisous” é para amigos e família; aqui, o fecho clássico é “Je vous prie d'agréer… l'expression de mes salutations distinguées”.",
              },
            ],
          },
          reponse: {
            emoji: '📬',
            text: "Le lendemain, la réponse arrive : “ Monsieur, Votre demande a bien été reçue. Un rendez-vous vous a été attribué le 20 juillet. Veuillez vous munir de l'attestation de perte et d'une photo d'identité. ” Au même moment, son GSM sonne : c'est l'administration communale de Bouillon.",
            translation: 'No dia seguinte, a resposta chega: “Senhor, O seu pedido foi recebido. Foi marcado um horário para o senhor no dia 20 de julho. Queira trazer o atestado de perda e uma foto 3×4.” No mesmo instante, o celular dele toca: é a prefeitura de Bouillon.',
            choices: [
              { text: 'Linu répond et va à la commune.', translation: 'O Linu atende e vai à prefeitura.', next: 'commune' },
              { text: "Linu ne répond pas : il a déjà son rendez-vous à l'ambassade.", translation: 'O Linu não atende: ele já tem horário na embaixada.', next: 'final_ambassade' },
            ],
          },
          commune: {
            emoji: '🏢',
            text: "Au guichet des objets trouvés, une employée consulte un registre : “ Un sac rouge a été déposé ce matin par un loueur de kayaks. Il a été retrouvé au bord de la Semois. Pourriez-vous nous décrire son contenu, afin que nous vérifiions qu'il vous appartient ? ”",
            translation: 'No guichê de achados e perdidos, uma funcionária consulta um registro: “Uma bolsa vermelha foi entregue hoje de manhã por um locador de caiaques. Ela foi encontrada à beira do Semois. O senhor poderia nos descrever o conteúdo, para que possamos verificar que ela lhe pertence?”',
            choices: [
              {
                text: '“ Il contient un passeport brésilien, une carte du Brésil et un poisson en peluche. ”',
                translation: '“Ela contém um passaporte brasileiro, um mapa do Brasil e um peixe de pelúcia.”',
                next: 'final_retrouve',
              },
            ],
          },
          final_retrouve: {
            emoji: '🎉',
            text: "L'employée sourit : “ Tout correspond. Veuillez signer ici. ” Le passeport est rendu à Linu, un peu mouillé mais intact. Le soir même, Linu écrit à l'ambassade pour annuler son rendez-vous, avec une formule de politesse impeccable.",
            translation: 'A funcionária sorri: “Tudo confere. Queira assinar aqui.” O passaporte é devolvido ao Linu, um pouco molhado, mas intacto. Na mesma noite, o Linu escreve à embaixada para cancelar o horário, com uma fórmula de cortesia impecável.',
            ending: {
              tone: 'bom',
              title: 'Passaporte de volta',
              message: "Você enfrentou a administração belga em francês formal: voz passiva (“a été déposé”, “vous sera remise”), “veuillez”, o condicional de cortesia e o fecho “Je vous prie d'agréer…”.",
            },
          },
          final_ambassade: {
            emoji: '⏳',
            text: "Le 20 juillet, un document de voyage provisoire est délivré à Linu, après deux heures d'attente. Une semaine plus tard, il apprend que son vrai passeport avait été retrouvé et qu'il l'attendait à Bouillon depuis des jours…",
            translation: 'No dia 20 de julho, um documento de viagem provisório é emitido para o Linu, depois de duas horas de espera. Uma semana mais tarde, ele fica sabendo que o seu passaporte verdadeiro tinha sido encontrado e que o esperava em Bouillon fazia dias…',
            ending: {
              tone: 'neutro',
              title: 'Burocracia em dobro',
              message: 'Deu tudo certo, mas com mais papelada do que precisava. Na administração, vale sempre atender o telefone!',
            },
          },
        },
      },
    ],
  },
  // ───────────────────────── Suíça ─────────────────────────
  {
    code: 'fr-CH',
    country: 'CHE',
    kind: 'dialeto',
    speechLocale: 'fr-CH',
    name: 'Francês da Suíça',
    flag: '🇨🇭',
    summary:
      'O francês da Suíça romanda (Genebra, Vaud, Neuchâtel, Jura e partes de Friburgo, do Valais e de Berna): gramática da França, ritmo mais calmo, “septante”, “huitante” e “nonante”, e palavras próprias, os “helvetismos”, como “natel”, “action” e “panosse”.',
    card: {
      id: 'fr-ch-c1',
      title: 'Huitante, natel e três beijos',
      emoji: '🇨🇭',
      history:
        'O francês é uma das quatro línguas nacionais da Suíça, ao lado do alemão, do italiano e do romanche. É a língua da Suíça romanda, no oeste do país: os cantões de Genebra, Vaud, Neuchâtel e Jura são francófonos, e os de Friburgo, Valais e Berna são bilíngues. Quase um quarto dos moradores da Suíça tem o francês como língua principal. Antes do francês padrão, a região falava os “patois”: dialetos franco-provençais e, no Jura, dialetos aparentados com o franc-comtois. Hoje eles sobrevivem em poucos vilarejos, sobretudo no Valais. O cantão do Jura é o mais novo da Suíça: separou-se do cantão de Berna em 1979.',
      culture_tip:
        'Na Suíça romanda, entre amigos, dão-se três beijos no rosto. A pontualidade é levada a sério: chegar atrasado a um compromisso, mesmo por poucos minutos, pede um pedido de desculpas. Aos domingos, as lojas fecham e se espera silêncio nos prédios. Paga-se em francos suíços, e várias vezes por ano os cidadãos votam em “votations” sobre leis e projetos. Quando você agradece, é comum ouvir “Service !” (disponha), e na despedida, “Belle journée !”.',
      grammar_why:
        "A gramática é a mesma da França; as diferenças estão nos números e no vocabulário. (1) 70 é “septante” e 90 é “nonante”; nos cantões de Vaud, Valais e Friburgo, 80 é “huitante”, mas em Genebra, Neuchâtel e no Jura continua “quatre-vingts”; (2) como na Bélgica, “déjeuner”, “dîner” e “souper” são o café da manhã, o almoço e o jantar; (3) muitas palavras vêm do alemão, do italiano ou da linguagem oficial da Confederação: “natel” (celular), “action” (promoção), “bancomat” (caixa eletrônico), “s'annoncer” (registrar-se na prefeitura). Reconheça esses helvetismos; no app seguimos o padrão da França.",
      grammar_examples: [
        ['Mon grand-père a huitante-deux ans.', 'Meu avô tem oitenta e dois anos. (Vaud; França: quatre-vingt-deux)'],
        ["Je t'appelle sur ton natel ce soir.", 'Te ligo no celular hoje à noite. (França: sur ton portable)'],
        ['Les fraises sont en action cette semaine.', 'Os morangos estão em promoção esta semana. (França: en promotion)'],
        ['On dîne à midi et demi ?', 'Vamos almoçar ao meio-dia e meia? (França: on déjeune)'],
        ['Merci beaucoup ! — Service !', 'Muito obrigado! — Disponha! (França: De rien !)'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O ritmo é mais lento e a melodia, mais arrastada, sobretudo no cantão de Vaud, onde a penúltima sílaba costuma ganhar um peso que não tem em Paris.',
      'Vogais longas podem marcar o feminino: “aimée” soa mais longo que “aimé”, e “amie” mais longo que “ami”.',
      "Mantém-se a diferença entre “j'irai” (futuro, com [e] fechado) e “j'irais” (condicional, com [ɛ] aberto), que muitos parisienses já pronunciam igual.",
      'Como na Bélgica, distinguem-se “brin” [bʁɛ̃] × “brun” [bʁœ̃] e “patte” × “pâte”, e o “t” de “vingt” costuma soar: [vɛ̃t].',
    ],
    vocab: [
      ['soixante-dix', 'septante', 'setenta'],
      ['quatre-vingts', 'huitante', 'oitenta', 'em Vaud, no Valais e em Friburgo; em Genebra, “quatre-vingts”'],
      ['quatre-vingt-dix', 'nonante', 'noventa'],
      ['petit-déjeuner', 'déjeuner', 'café da manhã'],
      ['déjeuner', 'dîner', 'almoço'],
      ['dîner', 'souper', 'jantar'],
      ['téléphone portable', 'natel', 'celular', 'era o nome do serviço de telefonia móvel suíço'],
      ['promotion', 'action', 'promoção', 'do alemão “Aktion”: “les tomates sont en action”'],
      ['distributeur de billets', 'bancomat', 'caixa eletrônico'],
      ['sac en plastique', 'cornet', 'sacola plástica', 'também o cone do sorvete'],
      ['serpillière', 'panosse', 'pano de chão', '“panosser” = passar pano'],
      ['serviette de bain', 'linge', 'toalha'],
      ['désordre', 'cheni', 'bagunça'],
      ['sèche-cheveux', 'foehn', 'secador de cabelo', 'do nome de um vento quente dos Alpes'],
      ['nettoyer', 'poutser', 'limpar, faxinar', 'do alemão “putzen”'],
      ['grenier', 'galetas', 'sótão'],
      ['maire', 'syndic', 'prefeito', 'em Vaud e em Friburgo; em Genebra e no Jura, “maire”'],
      ['lycée', 'gymnase', 'ensino médio', 'em Vaud; em Genebra, “collège”'],
      ['baccalauréat', 'maturité', 'diploma do ensino médio'],
      ['de rien', 'service', 'de nada, disponha'],
      ['référendum', 'votation', 'votação popular', 'acontece várias vezes por ano'],
      ["s'inscrire à la mairie", "s'annoncer (à la commune)", 'registrar-se na prefeitura', 'obrigatório para quem se muda'],
      ['assurance maladie', 'caisse maladie', 'plano de saúde', 'o seguro básico é obrigatório para todos os moradores'],
      ['cave aménagée', 'carnotzet', 'adega onde se come e se bebe com os amigos'],
      ['euro', 'franc', 'moeda', 'o franco suíço se divide em 100 centimes'],
    ],
    stories: [
      {
        id: 'fr-ch-h1',
        variant: 'fr-CH',
        level: 'B1.1',
        cefr: 'B1',
        title: 'La bise de Genève',
        emoji: '⛲',
        summary: "Em Genebra, o Linu ganha três beijos da amiga Chloé e descobre que “la bise” também é o nome de um vento gelado, que pode molhar quem chega perto do Jet d'eau.",
        cultural_context:
          "Genebra fica na ponta do lago Léman, no ponto em que o rio Ródano sai do lago. O Jet d'eau, o grande jato do porto, lança a água a cerca de 140 metros de altura; quando o vento sopra forte, ele é desligado. Esse vento frio do norte se chama “la bise”, a mesma palavra que o beijo no rosto. Nos Bains des Pâquis, os genebrinos tomam sol e banho de lago, e pequenos barcos amarelos atravessam a baía como um ônibus.",
        start: 'start',
        glossary: [
          ['il y avait', 'havia (imparfait)'],
          ['il a commencé', 'começou (passé composé)'],
          ['tu y viens ?', 'você vem para cá? (y = aqui, lá)'],
          ["on en fait trois", 'a gente dá três (en = beijos)'],
          ["ne t'approche pas", 'não chegue perto (imperativo negativo)'],
          ['la bise', 'o beijo no rosto; o vento frio do norte'],
          ['le natel', 'o celular (Suíça)'],
          ['en action', 'em promoção (Suíça)'],
        ],
        nodes: {
          start: {
            emoji: '🚆',
            text: "Linu est arrivé à la gare de Cornavin. Sur son natel, il lit un message de son amie Chloé : “ Je suis aux Bains des Pâquis. Tu y viens à pied ? C'est à dix minutes. Achète du pain en route ! ”",
            translation: 'O Linu chegou à estação de Cornavin. No celular, ele lê uma mensagem da amiga Chloé: “Estou nos Bains des Pâquis. Você vem a pé? São dez minutos. Compra pão no caminho!”',
            choices: [
              { text: 'Linu achète du pain et va aux Bains des Pâquis.', translation: 'O Linu compra pão e vai aos Bains des Pâquis.', next: 'bains' },
              {
                text: 'Linu achète du fromage et attend Chloé à la gare.',
                translation: 'O Linu compra queijo e espera a Chloé na estação.',
                wrong: 'A Chloé pediu pão (“Achète du pain en route”), e é o Linu que deve ir até ela: “Tu y viens à pied ?” (y = aos Bains des Pâquis).',
              },
            ],
          },
          bains: {
            emoji: '😘',
            text: "Quand Linu est arrivé, Chloé l'attendait au soleil. Elle lui a fait trois bises : “ En Suisse romande, on en fait trois ! ” Devant eux, le Jet d'eau montait très haut dans le ciel. “ Tu le vois ? Il monte à 140 mètres. Mais attention, aujourd'hui il y a de la bise. ”",
            translation: "Quando o Linu chegou, a Chloé o esperava ao sol. Ela lhe deu três beijos: “Na Suíça romanda, a gente dá três!” Na frente deles, o Jet d'eau subia muito alto no céu. “Está vendo? Ele sobe 140 metros. Mas cuidado, hoje está ventando a bise.”",
            choices: [{ text: '“ Encore une bise ? On en a déjà fait trois ! ”', translation: '“Mais um beijo? A gente já deu três!”', next: 'vent' }],
          },
          vent: {
            emoji: '🌬️',
            text: "Chloé rit : “ Non ! La bise, c'est aussi le vent froid du nord. Quand elle souffle trop fort, on arrête le Jet d'eau. ” Puis elle propose : “ On va voir le Jet d'eau de près, ou on monte à la vieille ville ? ”",
            translation: "A Chloé ri: “Não! A bise também é o vento frio do norte. Quando ele sopra forte demais, desligam o Jet d'eau.” Depois ela propõe: “Vamos ver o Jet d'eau de perto, ou subimos para a cidade velha?”",
            choices: [
              { text: "“ Allons voir le Jet d'eau ! ”", translation: "“Vamos ver o Jet d'eau!”", next: 'jet' },
              { text: '“ Montons à la vieille ville ! ”', translation: '“Vamos subir para a cidade velha!”', next: 'vieille' },
            ],
          },
          jet: {
            emoji: '💦',
            text: "Ils ont marché sur la jetée jusqu'au Jet d'eau. Le bruit était très fort et il y avait des gouttes partout. Tout à coup, la bise a changé de direction. Chloé a crié : “ Ne t'approche pas trop, sinon tu vas être trempé ! ”",
            translation: "Eles andaram pelo quebra-mar até o Jet d'eau. O barulho era muito forte e havia gotas por toda parte. De repente, a bise mudou de direção. A Chloé gritou: “Não chegue muito perto, senão você vai ficar encharcado!”",
            choices: [
              { text: 'Linu recule vite.', translation: 'O Linu recua depressa.', next: 'final_bateau' },
              { text: 'Linu avance sous le jet.', translation: 'O Linu avança para baixo do jato.', next: 'final_douche' },
              {
                text: "Chloé lui dit de s'approcher du jet.",
                translation: 'A Chloé diz para ele se aproximar do jato.',
                wrong: "“Ne t'approche pas” é imperativo negativo: a Chloé mandou o Linu NÃO chegar perto. No imperativo negativo, o pronome fica antes do verbo: “ne t'approche pas”; no afirmativo, depois: “approche-toi”.",
              },
            ],
          },
          vieille: {
            emoji: '⛪',
            text: "Ils sont montés à la cathédrale Saint-Pierre. Il y avait beaucoup de marches, mais d'en haut, on voyait tout le lac et les Alpes. Chloé a regardé l'heure : “ Il est midi et demi. On dîne ? Je connais un petit restaurant où on sert une fondue moitié-moitié. ”",
            translation: 'Eles subiram até a catedral de Saint-Pierre. Havia muitos degraus, mas lá de cima se via o lago inteiro e os Alpes. A Chloé olhou a hora: “É meio-dia e meia. Vamos almoçar? Conheço um restaurantezinho onde servem fondue meio a meio.”',
            choices: [{ text: "“ Avec plaisir, j'ai une faim de loup ! ”", translation: '“Com prazer, estou morrendo de fome!”', next: 'final_fondue' }],
          },
          final_bateau: {
            emoji: '⛴️',
            text: "Linu a reculé juste à temps. Pour rentrer, ils ont pris un petit bateau jaune qui traversait la rade. Linu a donné du pain aux mouettes, et Chloé lui a dit : “ Tu vois ? À Genève, ces petits bateaux s'appellent des ‘ mouettes ’, comme les oiseaux ! ”",
            translation: 'O Linu recuou bem a tempo. Para voltar, eles pegaram um barquinho amarelo que atravessava a baía. O Linu deu pão às gaivotas, e a Chloé lhe disse: “Viu? Em Genebra, esses barquinhos se chamam ‘mouettes’, gaivotas, como as aves!”',
            ending: {
              tone: 'bom',
              title: 'Seco e feliz',
              message: "Você acompanhou o passado com o imparfait (“Chloé l'attendait”, “le bruit était fort”) e o passé composé (“la bise a changé”, “ils ont pris”), e aprendeu os dois sentidos de “la bise”.",
            },
          },
          final_douche: {
            emoji: '🚿',
            text: "Une énorme vague d'eau est tombée sur Linu. Il était trempé de la tête aux pieds, mais très content. Chloé riait : “ Bon, tu n'as plus besoin de douche aujourd'hui ! ”",
            translation: 'Uma enorme onda de água caiu sobre o Linu. Ele estava encharcado da cabeça aos pés, mas muito contente. A Chloé ria: “Bom, hoje você não precisa mais de banho!”',
            ending: {
              tone: 'neutro',
              title: "Banho de Jet d'eau",
              message: "Para um pinguim, nada grave! Mas a Chloé avisou: “Ne t'approche pas trop”.",
            },
          },
          final_fondue: {
            emoji: '🫕',
            text: "Au restaurant, le serveur a posé la fondue sur la table. Linu a trempé son pain dans le fromage chaud. Quand il l'a remercié, le serveur a répondu : “ Service ! ” Linu a souri : il comprenait déjà un peu le français de Genève.",
            translation: 'No restaurante, o garçom pôs a fondue na mesa. O Linu mergulhou o pão no queijo quente. Quando ele agradeceu, o garçom respondeu: “Disponha!” O Linu sorriu: já entendia um pouco o francês de Genebra.',
            ending: {
              tone: 'bom',
              title: 'Fondue na cidade velha',
              message: 'Muito bem! Na Suíça, “dîner” ao meio-dia é o almoço, e “service” responde a um “merci”.',
            },
          },
        },
      },
      {
        id: 'fr-ch-h2',
        variant: 'fr-CH',
        level: 'B1.4',
        cefr: 'B1',
        title: 'Le guet de Lausanne',
        emoji: '🏮',
        summary: 'Em Lausanne, o amigo Noah quer que o Linu conheça a cidade das ladeiras, o lago e as vinhas, e que ouça, à noite, o vigia que anuncia as horas do alto da catedral.',
        cultural_context:
          "Lausanne, no cantão de Vaud, é construída numa encosta que desce até o lago Léman, no bairro de Ouchy; o metrô da cidade vence ladeiras muito íngremes. A leste ficam as vinhas em terraços de Lavaux, Patrimônio Mundial da UNESCO. Há séculos, todas as noites, um vigia, “le guet”, anuncia as horas do alto da torre da catedral, das 22h às 2h, gritando: “C'est le guet ! Il a sonné l'heure !”",
        start: 'start',
        glossary: [
          ['il faut que tu prennes', 'você precisa pegar (subjuntivo)'],
          ['je veux que tu entendes', 'quero que você ouça'],
          ['je suis contente que vous soyez là', 'fico contente que vocês estejam aqui'],
          ["je ne pense pas que l'eau soit chaude", 'não acho que a água esteja quente'],
          ['il dit que…', 'ele diz que… (discurso indireto)'],
          ['le guet', 'o vigia da catedral'],
          ['les vignes', 'as vinhas, os vinhedos'],
          ['la pente', 'a ladeira, a encosta'],
        ],
        nodes: {
          start: {
            emoji: '🚉',
            text: "Linu sort de la gare de Lausanne. Son ami Noah l'attend : “ Salut Linu ! Il faut que tu prennes le métro avec moi : ici, tout monte ou tout descend ! ” Linu regarde la rue : elle est vraiment très raide.",
            translation: 'O Linu sai da estação de Lausanne. O amigo Noah o espera: “Oi, Linu! Você precisa pegar o metrô comigo: aqui, tudo sobe ou tudo desce!” O Linu olha a rua: ela é mesmo muito íngreme.',
            choices: [
              { text: 'Ils prennent le métro ensemble.', translation: 'Eles pegam o metrô juntos.', next: 'metro' },
              {
                text: 'Noah veut que Linu monte à pied.',
                translation: 'O Noah quer que o Linu suba a pé.',
                wrong: '“Il faut que tu prennes le métro avec moi”: o Noah quer que o Linu pegue o metrô com ele. “Prennes” é o subjuntivo de “prendre”, depois de “il faut que”.',
              },
            ],
          },
          metro: {
            emoji: '🚇',
            text: "Dans le métro, Noah explique : “ Ce soir, je veux que tu entendes le guet. Tous les soirs, un homme crie les heures du haut de la cathédrale. ” Puis il demande : “ Mais cet après-midi, qu'est-ce que tu préfères ? Que nous descendions au lac, à Ouchy, ou que nous allions voir les vignes de Lavaux ? ”",
            translation: 'No metrô, o Noah explica: “Hoje à noite, quero que você ouça o guet. Todas as noites, um homem grita as horas do alto da catedral.” Depois pergunta: “Mas hoje à tarde, o que você prefere? Que a gente desça até o lago, em Ouchy, ou que a gente vá ver as vinhas de Lavaux?”',
            choices: [
              { text: '“ Le lac ! ”', translation: '“O lago!”', next: 'ouchy' },
              { text: '“ Les vignes ! ”', translation: '“As vinhas!”', next: 'lavaux' },
            ],
          },
          ouchy: {
            emoji: '🏊',
            text: "Au bord du lac, Linu veut se baigner tout de suite. Noah hésite : “ Je ne pense pas que l'eau soit très chaude… ” Linu plonge quand même : “ Elle est parfaite ! Il faut que tu viennes ! ” Noah met un pied dans l'eau et ressort en criant.",
            translation: 'À beira do lago, o Linu quer nadar na hora. O Noah hesita: “Não acho que a água esteja muito quente…” O Linu mergulha mesmo assim: “Está perfeita! Você precisa vir!” O Noah põe um pé na água e sai gritando.',
            choices: [{ text: 'Le soir, ils montent à la cathédrale.', translation: 'À noite, eles sobem até a catedral.', next: 'soir' }],
          },
          lavaux: {
            emoji: '🍇',
            text: "Les vignes descendent en terrasses jusqu'au lac. Une vigneronne leur offre du jus de raisin : “ Je suis contente que vous soyez venus ! Il faut que vous reveniez en automne, pour les vendanges. ” Linu est émerveillé par le paysage.",
            translation: 'As vinhas descem em terraços até o lago. Uma viticultora lhes oferece suco de uva: “Fico contente que vocês tenham vindo! Vocês precisam voltar no outono, para a colheita.” O Linu fica maravilhado com a paisagem.',
            choices: [{ text: 'Le soir, ils montent à la cathédrale.', translation: 'À noite, eles sobem até a catedral.', next: 'soir' }],
          },
          soir: {
            emoji: '🌙',
            text: "Il est presque dix heures. Sur la place de la cathédrale, tout est calme. Soudain, une voix crie du haut de la tour : “ C'est le guet ! Il a sonné l'heure ! ” Linu demande : “ Qu'est-ce qu'il dit ? ” Noah répond : “ Il dit que c'est le guet et qu'il a sonné l'heure. ”",
            translation: 'São quase dez horas. Na praça da catedral, está tudo calmo. De repente, uma voz grita do alto da torre: “É o vigia! Ele bateu a hora!” O Linu pergunta: “O que ele está dizendo?” O Noah responde: “Ele diz que é o vigia e que bateu a hora.”',
            choices: [
              { text: "“ Restons jusqu'à onze heures ! ”", translation: '“Vamos ficar até as onze!”', next: 'final_guet' },
              { text: '“ Rentrons, je suis fatigué. ”', translation: '“Vamos voltar, estou cansado.”', next: 'final_dodo' },
              {
                text: 'Linu comprend que le guet dit à tout le monde de rentrer.',
                translation: 'O Linu entende que o vigia manda todo mundo voltar para casa.',
                wrong: "O Noah repetiu em discurso indireto: “Il dit que c'est le guet et qu'il a sonné l'heure”. O guet só anuncia a hora; ele não manda ninguém para casa.",
              },
            ],
          },
          final_guet: {
            emoji: '🕚',
            text: "À onze heures, la voix revient : “ C'est le guet ! Il a sonné l'heure ! ” Cette fois, Linu comprend tout. Noah sourit : “ Je suis content que tu l'aies entendu deux fois. Maintenant, tu es presque un vrai Lausannois ! ”",
            translation: 'Às onze horas, a voz volta: “É o vigia! Ele bateu a hora!” Desta vez, o Linu entende tudo. O Noah sorri: “Fico contente que você o tenha ouvido duas vezes. Agora você é quase um lausannense de verdade!”',
            ending: {
              tone: 'bom',
              title: 'A voz da torre',
              message: "Você acompanhou o subjuntivo depois de desejos, obrigações, dúvidas e emoções (“je veux que tu entendes”, “il faut que tu prennes”, “je ne pense pas que l'eau soit”, “je suis content que tu l'aies entendu”) e o discurso indireto: “il dit que…”.",
            },
          },
          final_dodo: {
            emoji: '😴',
            text: "Ils rentrent chez Noah. Linu s'endort tout de suite. Le lendemain matin, il demande : “ Le guet a crié toute la nuit ? ” Noah rit : “ Jusqu'à deux heures ! Mais il faut que tu reviennes pour l'entendre encore. ”",
            translation: 'Eles voltam para a casa do Noah. O Linu pega no sono na hora. Na manhã seguinte, ele pergunta: “O vigia gritou a noite toda?” O Noah ri: “Até as duas! Mas você precisa voltar para ouvi-lo de novo.”',
            ending: {
              tone: 'neutro',
              title: 'Uma vez só',
              message: 'O Linu ouviu o guet uma vez e dormiu cedo. Uma boa desculpa para voltar a Lausanne!',
            },
          },
        },
      },
      {
        id: 'fr-ch-h3',
        variant: 'fr-CH',
        level: 'B2.2',
        cefr: 'B2',
        title: 'Un été aux Franches-Montagnes',
        emoji: '🐴',
        summary: 'O Linu vai passar seis meses trabalhando num haras do Jura suíço e precisa se registrar na comuna, entender cartas oficiais e contratar o plano de saúde obrigatório.',
        cultural_context:
          "As Franches-Montagnes são um planalto de pastos e florestas de pinheiros no cantão do Jura, famoso pela raça de cavalos que leva o seu nome. Em Saignelégier, todo mês de agosto, o Marché-Concours reúne criadores, desfiles e corridas de cavalos. Na Suíça, quem se muda precisa “s'annoncer” (registrar-se) na comuna, e todo morador deve ter um seguro de saúde básico, contratado numa “caisse maladie” em até três meses.",
        start: 'start',
        glossary: [
          ["s'annoncer à la commune", 'registrar-se na prefeitura (Suíça)'],
          ['le contrôle des habitants', 'o serviço de registro de moradores'],
          ['votre dossier sera transmis', 'o seu processo será encaminhado (voz passiva)'],
          ['vous avez été affilié', 'o senhor foi inscrito'],
          ['la caisse maladie', 'o plano de saúde (Suíça)'],
          ["d'office", 'automaticamente, por decisão da autoridade'],
          ['Par la présente…', 'Pela presente… (carta formal)'],
          ['Veuillez agréer…', 'Atenciosamente… (fecho formal)'],
        ],
        nodes: {
          start: {
            emoji: '🌲',
            text: "Linu arrive dans une ferme près de Saignelégier, où il va travailler six mois avec les chevaux. La propriétaire, Madame Girardin, l'accueille : “ Bienvenue ! Avant de commencer, vous devez vous annoncer au contrôle des habitants de la commune. C'est obligatoire. ”",
            translation: 'O Linu chega a uma fazenda perto de Saignelégier, onde vai trabalhar seis meses com os cavalos. A proprietária, a senhora Girardin, o recebe: “Bem-vindo! Antes de começar, o senhor precisa se registrar no serviço de moradores da comuna. É obrigatório.”',
            choices: [
              { text: 'Linu va à la commune.', translation: 'O Linu vai à prefeitura.', next: 'commune' },
              {
                text: 'Linu envoie un message au syndic.',
                translation: 'O Linu manda uma mensagem ao syndic.',
                wrong: 'A senhora Girardin disse para ir ao “contrôle des habitants” da comuna, pessoalmente. E no Jura quem governa a comuna é o “maire”; “syndic” é o título usado em Vaud e em Friburgo.',
              },
            ],
          },
          commune: {
            emoji: '🏛️',
            text: "Au guichet, une employée lui tend un formulaire : “ Veuillez remplir ce formulaire et joindre une copie de votre passeport et de votre contrat de travail. Votre annonce sera enregistrée aujourd'hui, puis votre dossier sera transmis au service cantonal de la population. ”",
            translation: 'No guichê, uma funcionária lhe entrega um formulário: “Queira preencher este formulário e anexar uma cópia do seu passaporte e do seu contrato de trabalho. O seu registro será feito hoje, e depois o seu processo será encaminhado ao serviço cantonal de população.”',
            choices: [
              {
                text: '“ Pourriez-vous me dire si je dois aussi conclure une assurance maladie ? ”',
                translation: '“A senhora poderia me dizer se também devo contratar um plano de saúde?”',
                next: 'assurance',
              },
              {
                text: "Linu comprend qu'il doit lui-même envoyer son dossier au canton.",
                translation: 'O Linu entende que ele mesmo deve mandar o processo ao cantão.',
                wrong: '“Votre dossier sera transmis au service cantonal” está na voz passiva: quem encaminha o processo é a comuna, não o Linu. Ele só precisa preencher o formulário e anexar os documentos.',
              },
            ],
          },
          assurance: {
            emoji: '🩺',
            text: "“ Oui. L'assurance de base est obligatoire pour toute personne domiciliée en Suisse. Vous disposez de trois mois pour vous affilier à une caisse maladie. Passé ce délai, vous serez affilié d'office par le canton. ”",
            translation: '“Sim. O seguro básico é obrigatório para toda pessoa domiciliada na Suíça. O senhor tem três meses para se inscrever num plano de saúde. Depois desse prazo, o senhor será inscrito automaticamente pelo cantão.”',
            choices: [
              { text: 'Linu écrit tout de suite à une caisse maladie.', translation: 'O Linu escreve imediatamente para um plano de saúde.', next: 'lettre' },
              { text: "Linu décide d'attendre la fin de l'été.", translation: 'O Linu decide esperar o fim do verão.', next: 'final_office' },
            ],
          },
          lettre: {
            emoji: '✉️',
            text: "Le soir, Madame Girardin l'aide à rédiger sa lettre : “ Madame, Monsieur, Par la présente, je sollicite une offre pour l'assurance obligatoire des soins. Je suis domicilié à Saignelégier depuis le 1er juin. Vous trouverez ci-joint une copie de mon attestation d'annonce. ” Il faut maintenant choisir la formule finale.",
            translation: 'À noite, a senhora Girardin o ajuda a redigir a carta: “Prezados senhores, Pela presente, solicito uma proposta para o seguro obrigatório de saúde. Resido em Saignelégier desde 1º de junho. Segue em anexo uma cópia do meu comprovante de registro.” Agora é preciso escolher a fórmula de encerramento.',
            choices: [
              {
                text: "“ Veuillez agréer, Madame, Monsieur, mes salutations distinguées. ”",
                translation: '“Atenciosamente.” (literalmente: “Queiram aceitar, senhora, senhor, as minhas saudações distintas.”)',
                next: 'reponse',
              },
              {
                text: '“ Merci, à plus ! ”',
                translation: '“Valeu, até mais!”',
                wrong: 'Uma carta a uma seguradora pede o registro formal até o fim. “À plus” é coisa de mensagem entre amigos; o fecho adequado é “Veuillez agréer, Madame, Monsieur, mes salutations distinguées”.',
              },
            ],
          },
          reponse: {
            emoji: '📬',
            text: "Deux semaines plus tard, deux lettres arrivent. La commune écrit : “ Nous vous informons que votre annonce a été enregistrée et que votre titre de séjour vous sera délivré par le canton. ” La caisse maladie écrit : “ Votre contrat a été établi. Il est valable dès le 1er juin. ” Madame Girardin sourit : “ Bravo ! Maintenant, vous pouvez profiter de l'été. En août, il y a le Marché-Concours. ”",
            translation: 'Duas semanas depois, chegam duas cartas. A comuna escreve: “Informamos que o seu registro foi feito e que a sua autorização de residência será emitida pelo cantão.” O plano de saúde escreve: “O seu contrato foi emitido. Ele é válido a partir de 1º de junho.” A senhora Girardin sorri: “Parabéns! Agora o senhor pode aproveitar o verão. Em agosto, tem o Marché-Concours.”',
            choices: [
              { text: 'En août, Linu va au Marché-Concours avec les chevaux.', translation: 'Em agosto, o Linu vai ao Marché-Concours com os cavalos.', next: 'final_marche' },
              { text: 'Le dimanche suivant, Linu part en excursion à Saint-Ursanne.', translation: 'No domingo seguinte, o Linu vai passear em Saint-Ursanne.', next: 'final_ursanne' },
            ],
          },
          final_marche: {
            emoji: '🏇',
            text: "À Saignelégier, des milliers de visiteurs sont venus voir les chevaux des Franches-Montagnes. La jument de Madame Girardin a été choisie pour le grand cortège. Linu marche à côté d'elle, fier comme un vrai Jurassien.",
            translation: 'Em Saignelégier, milhares de visitantes vieram ver os cavalos das Franches-Montagnes. A égua da senhora Girardin foi escolhida para o grande desfile. O Linu caminha ao lado dela, orgulhoso como um jurassiano de verdade.',
            ending: {
              tone: 'bom',
              title: 'Tudo em ordem',
              message: 'Você enfrentou a administração suíça em francês formal: voz passiva (“a été enregistrée”, “sera délivré”, “a été choisie”), “veuillez”, o condicional de cortesia e o fecho de carta.',
            },
          },
          final_ursanne: {
            emoji: '🌉',
            text: "Saint-Ursanne est une petite ville médiévale au bord du Doubs, avec un vieux pont de pierre et une collégiale. Linu s'assied au bord de la rivière et pense : “ Les papiers sont en ordre, les chevaux m'attendent lundi. La vie est belle. ”",
            translation: 'Saint-Ursanne é uma cidadezinha medieval às margens do Doubs, com uma velha ponte de pedra e uma igreja colegiada. O Linu se senta à beira do rio e pensa: “Os papéis estão em ordem, os cavalos me esperam na segunda. A vida é bela.”',
            ending: {
              tone: 'bom',
              title: 'Papéis em ordem',
              message: 'Com a burocracia resolvida, sobrou tempo para passear. Você leu cartas oficiais na voz passiva sem se perder!',
            },
          },
          final_office: {
            emoji: '📑',
            text: "En septembre, Linu reçoit une lettre du canton : “ Faute d'affiliation dans le délai légal, vous avez été affilié d'office à une caisse maladie. Les primes dues depuis le 1er juin vous seront facturées. ” Linu soupire : il n'a même pas pu choisir sa caisse.",
            translation: 'Em setembro, o Linu recebe uma carta do cantão: “Por falta de inscrição no prazo legal, o senhor foi inscrito automaticamente num plano de saúde. As mensalidades devidas desde 1º de junho serão cobradas do senhor.” O Linu suspira: nem pôde escolher o plano.',
            ending: {
              tone: 'neutro',
              title: "Inscrito d'office",
              message: 'O prazo de três meses passou, e o cantão decidiu por ele. Na Suíça, a papelada tem prazo e é levada a sério!',
            },
          },
        },
      },
    ],
  },
  // ───────────────────────── África Ocidental ─────────────────────────
  {
    code: 'fr-SN',
    country: 'SEN',
    kind: 'dialeto',
    speechLocale: 'fr-FR',
    name: 'Francês da África Ocidental',
    flag: '🇸🇳',
    summary:
      'O francês do Senegal, da Costa do Marfim e dos países vizinhos: língua da escola, da administração e da imprensa, com normas próprias, palavras vindas das línguas locais, como o wolof, e expressões que não existem na França, como “essencerie” e “ça va un peu”.',
    card: {
      id: 'fr-sn-c1',
      title: 'Teranga, maquis e nouchi',
      emoji: '🌍',
      history:
        'O francês chegou à África Ocidental com a colonização francesa, nos séculos XIX e XX. Com as independências, em 1960, países como o Senegal e a Costa do Marfim mantiveram o francês como língua oficial, ao lado das suas muitas línguas nacionais. No Senegal, a língua mais falada no dia a dia é o wolof, e o francês é sobretudo a língua da escola, da administração e da imprensa; a Constituição reconhece também outras línguas nacionais, como o pulaar, o serer, o diola, o malinké e o soninké. Na Costa do Marfim, onde se falam dezenas de línguas, o francês virou a língua comum das cidades, e muitos jovens de Abidjan crescem falando-o em casa. Hoje, a maior parte das pessoas que usam o francês no dia a dia vive na África.',
      culture_tip:
        'O francês africano não é um francês “errado”: tem normas próprias, descritas por linguistas e registradas em dicionários, e as suas palavras são tão legítimas quanto os belgicismos ou os quebequismos. No Senegal, a “teranga” (hospitalidade, em wolof) é um orgulho nacional: o visitante é convidado a comer do prato comum e a tomar o “ataya”, o chá verde com hortelã servido em três rodadas. As saudações são longas e importantes: pergunta-se pela família, pela saúde e pelo trabalho antes de tratar de qualquer assunto. Em Abidjan, o nouchi, uma gíria urbana nascida entre os jovens nos anos 1970 e 1980, mistura o francês com o diúla e outras línguas; é a fala descontraída da rua e da música, não o francês de todos os marfinenses em todas as situações.',
      grammar_why:
        'A gramática de base é a mesma da França, e na escola, na imprensa e nos documentos oficiais segue-se a norma padrão. Na fala do dia a dia aparecem traços próprios: (1) palavras vindas das línguas locais, como “teranga” e “toubab” (estrangeiro, sobretudo europeu), no Senegal; (2) palavras francesas criadas ou usadas com sentido novo: “essencerie” (posto de gasolina), “gâté” (quebrado, enguiçado), “cadeau” (de graça); (3) expressões próprias, como o “On dit quoi ?” (e aí?) e o “Ça va un peu” (tudo bem) da Costa do Marfim. Reconheça essas formas e respeite-as; no app seguimos o padrão da França.',
      grammar_examples: [
        ["Il y a une essencerie après le rond-point.", 'Há um posto de gasolina depois da rotatória. (Senegal; França: une station-service)'],
        ['Mon téléphone est gâté, il faut le réparer.', 'Meu telefone quebrou, preciso consertá-lo. (França: il est en panne)'],
        ['On dit quoi ? — Ça va un peu !', 'E aí? — Tudo certo! (Costa do Marfim)'],
        ["Ici, la teranga, ce n'est pas un mot : c'est une manière de vivre.", 'Aqui, a teranga não é uma palavra: é um jeito de viver.'],
        ["Viens manger avec nous, c'est cadeau !", 'Vem comer com a gente, é por nossa conta!'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'Em boa parte da África Ocidental, o “r” é vibrante, com a ponta da língua, como o “r” de “caro”, e não o “r” do fundo da garganta de Paris.',
      'As sílabas tendem a ter todas o mesmo peso, e o “e” mudo muitas vezes é pronunciado: “petit” soa [pəti], com o “e” bem claro, e não [pti].',
      'A melodia muda de país para país: as línguas da Costa do Marfim, muitas delas tonais, dão ao francês de Abidjan um ritmo diferente do de Dacar, marcado pelo wolof. Um senegalês e um marfinense se reconhecem pela primeira frase, como um carioca e um gaúcho.',
      'O “h” nunca soa, como em Paris, e as ligações obrigatórias se fazem: “les‿enfants”. Na fala culta e na mídia, a pronúncia segue de perto a norma escolar.',
    ],
    vocab: [
      ['station-service', 'essencerie', 'posto de gasolina', 'Senegal'],
      ['en panne, cassé', 'gâté', 'quebrado, enguiçado', '“la voiture est gâtée”'],
      ['gratuit', 'cadeau', 'de graça', "“c'est cadeau”"],
      ['hospitalité', 'teranga', 'hospitalidade', 'do wolof; um orgulho nacional no Senegal'],
      ['étranger (surtout européen)', 'toubab', 'estrangeiro', 'do wolof; em geral sem intenção de ofender'],
      ['grill de mouton', 'dibiterie', 'churrascaria de carneiro', 'Senegal: carne de carneiro grelhada na brasa'],
      ['minibus', 'car rapide', 'micro-ônibus', 'Dacar: os ônibus pintados de azul e amarelo'],
      ['taxi clandestin', 'clando', 'táxi clandestino', 'Senegal'],
      ['taxi collectif', 'woro-woro', 'táxi coletivo', 'Abidjan'],
      ['minibus', 'gbaka', 'van de transporte coletivo', 'Abidjan'],
      ['petit restaurant populaire', 'maquis', 'restaurante popular', 'Costa do Marfim: ao ar livre, com peixe e frango grelhados'],
      ['thé à la menthe', 'ataya', 'chá verde com hortelã', 'Senegal: servido em três rodadas'],
      ['salut, ça va ?', 'on dit quoi ?', 'e aí?', 'Costa do Marfim'],
      ['ça va bien', 'ça va un peu', 'tudo bem, vai indo', 'Costa do Marfim'],
      ['pas de problème', 'y a pas drap', 'sem problema', 'nouchi (Abidjan)'],
      ["s'amuser", "s'enjailler", 'curtir, se divertir', 'nouchi, do inglês “enjoy”'],
      ['fille, copine', 'go', 'garota, namorada', 'nouchi'],
      ['naïf, novato', 'gaou', 'ingênuo, bobo', 'nouchi'],
      ["fête de l'Aïd el-Kébir", 'Tabaski', 'festa do Sacrifício', 'a grande festa muçulmana, com o carneiro'],
      ['merci', 'jërëjëf', 'obrigado', 'wolof; ouve-se no meio do francês, em Dacar'],
    ],
    stories: [
      {
        id: 'fr-sn-h1',
        variant: 'fr-SN',
        level: 'B1.1',
        cefr: 'B1',
        title: 'La teranga à Dakar',
        emoji: '🍚',
        summary: 'Em Dacar, a amiga Awa ensina ao Linu as saudações senegalesas, o car rapide, o prato comum do thiéboudienne e o chá ataya em três rodadas.',
        cultural_context:
          'Dacar, a capital do Senegal, ocupa a península do Cabo Verde, o ponto mais ocidental da África continental. Os “cars rapides”, micro-ônibus pintados de azul e amarelo, são um símbolo da cidade. O thiéboudienne (em wolof, “ceebu jën”), arroz com peixe e legumes, é o prato nacional e entrou na lista do Patrimônio Cultural Imaterial da UNESCO em 2021. Diante da cidade fica a ilha de Gorée, Patrimônio Mundial da UNESCO, lugar de memória do tráfico de escravizados.',
        start: 'start',
        glossary: [
          ['tu as bien dormi ?', 'dormiu bem? (passé composé)'],
          ['il y avait', 'havia (imparfait)'],
          ['on y va', 'vamos lá (y = lá)'],
          ["je t'en sers un verre", 'eu te sirvo um copo (en = de chá)'],
          ['mange avec la main droite', 'coma com a mão direita (imperativo)'],
          ['la teranga', 'a hospitalidade (wolof)'],
          ['le car rapide', 'o micro-ônibus de Dacar'],
          ["l'ataya", 'o chá com hortelã'],
        ],
        nodes: {
          start: {
            emoji: '🌅',
            text: "Linu est arrivé à Dakar hier soir. Ce matin, son amie Awa vient le chercher à l'hôtel : “ Bonjour Linu ! Tu as bien dormi ? Et ta famille, elle va bien ? Et la santé ? Et ton travail ? ”",
            translation: 'O Linu chegou a Dacar ontem à noite. Hoje de manhã, a amiga Awa vem buscá-lo no hotel: “Bom dia, Linu! Dormiu bem? E a sua família, está bem? E a saúde? E o trabalho?”',
            choices: [
              {
                text: "“ J'ai très bien dormi, merci ! Ma famille va bien. Et chez toi, tout le monde va bien ? ”",
                translation: '“Dormi muito bem, obrigado! Minha família está bem. E na sua casa, está todo mundo bem?”',
                next: 'transport',
              },
              {
                text: "“ Ça va. Bon, on visite quoi aujourd'hui ? ”",
                translation: '“Tudo bem. Bom, o que vamos visitar hoje?”',
                wrong: 'No Senegal, as saudações são longas e importantes: responde-se a cada pergunta e se pergunta de volta pela família do outro. Pular direto para o assunto soa frio.',
              },
            ],
          },
          transport: {
            emoji: '🚌',
            text: "Awa sourit : “ Tout le monde va bien, merci. Alors, on y va ? On peut prendre un car rapide ou un taxi jusqu'au marché. ” Dans la rue, il y avait déjà beaucoup de monde, de la musique et une odeur de pain chaud.",
            translation: 'A Awa sorri: “Todo mundo está bem, obrigada. Então, vamos lá? Podemos pegar um car rapide ou um táxi até o mercado.” Na rua, já havia muita gente, música e um cheiro de pão quente.',
            choices: [
              { text: '“ Le car rapide ! ”', translation: '“O car rapide!”', next: 'car' },
              { text: '“ Un taxi ! ”', translation: '“Um táxi!”', next: 'taxi' },
            ],
          },
          car: {
            emoji: '🚐',
            text: "Le car rapide était bleu et jaune, couvert de dessins et de phrases peintes. Un jeune homme, debout à l'arrière, criait le nom des quartiers. Linu était serré entre une dame avec un panier de mangues et un étudiant qui révisait ses cours. Il a adoré.",
            translation: 'O car rapide era azul e amarelo, coberto de desenhos e frases pintadas. Um rapaz, de pé na traseira, gritava o nome dos bairros. O Linu estava espremido entre uma senhora com um cesto de mangas e um estudante que revisava a matéria. Ele adorou.',
            choices: [{ text: 'Ils descendent au marché.', translation: 'Eles descem no mercado.', next: 'repas' }],
          },
          taxi: {
            emoji: '🚕',
            text: "Awa a arrêté un taxi jaune et noir. Avant de monter, elle a discuté le prix avec le chauffeur : “ Ici, il n'y a pas de compteur. Le prix, on le négocie avant ! ” Ils l'ont payé deux mille francs CFA, et le chauffeur leur a souhaité une bonne journée.",
            translation: 'A Awa parou um táxi amarelo e preto. Antes de entrar, ela discutiu o preço com o motorista: “Aqui não tem taxímetro. O preço, a gente negocia antes!” Eles pagaram dois mil francos CFA, e o motorista lhes desejou um bom dia.',
            choices: [{ text: 'Ils arrivent au marché.', translation: 'Eles chegam ao mercado.', next: 'repas' }],
          },
          repas: {
            emoji: '🍛',
            text: "À midi, la mère d'Awa les attendait avec un grand plat de thiéboudienne : du riz rouge, du poisson et des légumes. Toute la famille s'est assise autour du plat. Awa a murmuré à Linu : “ Mange avec la main droite, et prends devant toi. ”",
            translation: 'Ao meio-dia, a mãe da Awa os esperava com uma grande travessa de thiéboudienne: arroz vermelho, peixe e legumes. A família toda se sentou em volta da travessa. A Awa cochichou para o Linu: “Coma com a mão direita, e pegue da parte à sua frente.”',
            choices: [
              { text: 'Linu mange avec la main droite, devant lui.', translation: 'O Linu come com a mão direita, da parte à sua frente.', next: 'ataya' },
              {
                text: 'Linu prend le meilleur poisson au milieu du plat.',
                translation: 'O Linu pega o melhor peixe do meio da travessa.',
                wrong: 'A Awa explicou no imperativo: “prends devant toi” (pegue da parte à sua frente). No prato comum, cada um come do seu lado, e muitas vezes são os donos da casa que oferecem ao convidado os melhores pedaços.',
              },
            ],
          },
          ataya: {
            emoji: '🍵',
            text: "Après le repas, le frère d'Awa a préparé l'ataya. Il versait le thé de très haut pour faire de la mousse. “ Je t'en sers un verre ? Il y en a trois : le premier est fort, le deuxième est plus doux, le troisième est très sucré. ” Linu les a tous bus. Puis Awa a proposé : “ Cet après-midi, on prend la chaloupe pour Gorée, ou tu te reposes ? ”",
            translation: 'Depois da refeição, o irmão da Awa preparou o ataya. Ele despejava o chá de bem alto para fazer espuma. “Te sirvo um copo? São três: o primeiro é forte, o segundo é mais suave, o terceiro é bem doce.” O Linu tomou todos. Depois, a Awa propôs: “Hoje à tarde, pegamos a balsa para Gorée, ou você descansa?”',
            choices: [
              { text: '“ Allons à Gorée ! ”', translation: '“Vamos a Gorée!”', next: 'final_goree' },
              { text: '“ Je vais me reposer un peu. ”', translation: '“Vou descansar um pouco.”', next: 'final_sieste' },
            ],
          },
          final_goree: {
            emoji: '🏝️',
            text: "Sur l'île de Gorée, il n'y avait pas de voitures, seulement des rues calmes et des maisons colorées. Ils ont visité la Maison des Esclaves, un lieu de mémoire de la traite. Linu est resté longtemps silencieux. Le soir, sur la chaloupe, Awa lui a dit : “ Il faut connaître l'histoire pour comprendre le présent. ”",
            translation: 'Na ilha de Gorée, não havia carros, só ruas calmas e casas coloridas. Eles visitaram a Casa dos Escravos, um lugar de memória do tráfico. O Linu ficou muito tempo em silêncio. À noite, na balsa, a Awa lhe disse: “É preciso conhecer a história para entender o presente.”',
            ending: {
              tone: 'bom',
              title: 'Um dia de teranga',
              message: "Você acompanhou o passado com o imparfait (“il y avait”, “il versait”) e o passé composé (“ils ont visité”, “Linu est resté”), e os pronomes “y” e “en”: “on y va”, “je t'en sers un verre”.",
            },
          },
          final_sieste: {
            emoji: '😴',
            text: "Linu s'est endormi sur une natte, à l'ombre. Quand il s'est réveillé, le soleil se couchait et toute la famille riait autour de lui. “ Tu as dormi trois heures ! ”, lui a dit Awa. “ Ce n'est pas grave : Gorée, on la visitera demain. ”",
            translation: 'O Linu pegou no sono numa esteira, à sombra. Quando acordou, o sol se punha e a família toda ria em volta dele. “Você dormiu três horas!”, disse a Awa. “Não tem problema: Gorée, a gente visita amanhã.”',
            ending: {
              tone: 'neutro',
              title: 'Sesta depois do ataya',
              message: 'Três copos de chá não bastaram para manter o Linu acordado! Gorée fica para amanhã.',
            },
          },
        },
      },
      {
        id: 'fr-sn-h2',
        variant: 'fr-SN',
        level: 'B1.4',
        cefr: 'B1',
        title: 'On dit quoi, Abidjan ?',
        emoji: '🐟',
        summary: 'O Linu troca o Senegal pela Costa do Marfim, outro país, e descobre em Abidjan a laguna, os maquis, o attiéké e algumas palavras de nouchi.',
        cultural_context:
          'A Costa do Marfim é outro país, a cerca de 1.800 km do Senegal, com as suas próprias línguas nacionais, como o diúla, o baulê e o bete; o wolof de Dacar não é falado ali. Abidjan é a capital econômica e a maior cidade do país (a capital política é Yamoussoukro), construída em volta da laguna Ébrié. O attiéké, uma sêmola de mandioca, é servido nos “maquis”, restaurantes populares ao ar livre, e o nouchi, a gíria dos jovens de Abidjan, se ouve na rua e na música.',
        start: 'start',
        glossary: [
          ['il faut que tu saches', 'você precisa saber (subjuntivo de “savoir”)'],
          ['je veux que tu voies', 'quero que você veja'],
          ['je suis contente que tu sois venu', 'estou contente que você tenha vindo'],
          ['elle dit que…', 'ela diz que… (discurso indireto)'],
          ['On dit quoi ?', 'E aí? (Costa do Marfim)'],
          ['Ça va un peu', 'Tudo bem (Costa do Marfim)'],
          ["s'enjailler", 'curtir (nouchi)'],
          ["l'attiéké", 'a sêmola de mandioca'],
        ],
        nodes: {
          start: {
            emoji: '✈️',
            text: "Après Dakar, Linu arrive à Abidjan. Son ami Koffi l'attend à l'aéroport : “ On dit quoi, Linu ? Bienvenue en Côte d'Ivoire ! Il faut que tu saches une chose : ici, ce n'est pas le Sénégal. C'est un autre pays, avec ses langues et sa manière de parler. ”",
            translation: 'Depois de Dacar, o Linu chega a Abidjan. O amigo Koffi o espera no aeroporto: “E aí, Linu? Bem-vindo à Costa do Marfim! Você precisa saber uma coisa: aqui não é o Senegal. É outro país, com as suas línguas e o seu jeito de falar.”',
            choices: [
              { text: '“ Ça va un peu ! Et toi ? ”', translation: '“Tudo certo! E você?”', next: 'lagune' },
              {
                text: '“ Jërëjëf ! Nanga def ? ”',
                translation: '“Obrigado! Como vai?” (em wolof)',
                wrong: 'O wolof é a língua de Dacar, no Senegal, e não se fala em Abidjan. Na Costa do Marfim, ao “On dit quoi ?”, responde-se num francês bem local: “Ça va un peu !”.',
              },
            ],
          },
          lagune: {
            emoji: '🌊',
            text: "Koffi rit : “ Tu apprends vite ! Maintenant, je veux que tu voies la lagune Ébrié. On peut la traverser en bateau-bus, ou prendre un woro-woro, un taxi collectif. Qu'est-ce que tu préfères ? ”",
            translation: 'O Koffi ri: “Você aprende rápido! Agora, quero que você veja a laguna Ébrié. Podemos atravessá-la de barco-ônibus, ou pegar um woro-woro, um táxi coletivo. O que você prefere?”',
            choices: [
              { text: '“ Le bateau-bus ! ”', translation: '“O barco-ônibus!”', next: 'bateau' },
              { text: '“ Le woro-woro ! ”', translation: '“O woro-woro!”', next: 'woro' },
            ],
          },
          bateau: {
            emoji: '⛴️',
            text: "Sur le bateau, le vent est chaud. Au loin, Linu voit les tours du Plateau, le quartier des affaires. Le téléphone de Koffi sonne. Il écoute, puis explique : “ C'est ma sœur Aya. Elle dit qu'elle nous attend au maquis et qu'elle a déjà commandé à manger. Elle veut qu'on se dépêche ! ”",
            translation: 'No barco, o vento é quente. Ao longe, o Linu vê as torres do Plateau, o bairro dos negócios. O telefone do Koffi toca. Ele escuta e depois explica: “É a minha irmã, a Aya. Ela diz que está nos esperando no maquis e que já pediu a comida. Ela quer que a gente se apresse!”',
            choices: [{ text: 'Ils vont au maquis.', translation: 'Eles vão ao maquis.', next: 'maquis' }],
          },
          woro: {
            emoji: '🚕',
            text: "Dans le woro-woro, il y a déjà trois passagers. Le chauffeur roule vite et chante avec la radio. Au bout de vingt minutes, il se retourne : “ Il faut que vous descendiez ici, je ne vais pas plus loin. Le maquis est juste là. ”",
            translation: 'No woro-woro, já há três passageiros. O motorista dirige rápido e canta junto com o rádio. Depois de vinte minutos, ele se vira: “Vocês precisam descer aqui, eu não vou mais longe. O maquis é logo ali.”',
            choices: [{ text: 'Ils descendent et vont au maquis.', translation: 'Eles descem e vão ao maquis.', next: 'maquis' }],
          },
          maquis: {
            emoji: '🐟',
            text: "Au maquis, Aya les accueille : “ Je suis contente que tu sois venu, Linu ! Il faut que tu goûtes l'attiéké avec du poisson braisé. Attention, le piment est très fort ! ” Puis elle ajoute en riant : “ Après, on va s'enjailler ! ” Linu regarde Koffi, perdu.",
            translation: 'No maquis, a Aya os recebe: “Estou contente que você tenha vindo, Linu! Você precisa provar o attiéké com peixe grelhado. Cuidado, a pimenta é muito forte!” Depois acrescenta, rindo: “Depois, a gente vai curtir!” O Linu olha para o Koffi, perdido.',
            choices: [
              { text: "“ Qu'est-ce que ça veut dire, s'enjailler ? ”", translation: "“O que quer dizer ‘s'enjailler’?”", next: 'nouchi' },
              {
                text: "Linu comprend qu'Aya veut qu'il parte.",
                translation: 'O Linu entende que a Aya quer que ele vá embora.',
                wrong: "A Aya disse “je suis contente que tu sois venu” e “il faut que tu goûtes l'attiéké”: ela quer que o Linu fique e coma! “S'enjailler” é nouchi e quer dizer “curtir”.",
              },
            ],
          },
          nouchi: {
            emoji: '🗣️',
            text: "Koffi explique : “ C'est du nouchi, l'argot des jeunes d'Abidjan. ‘ S'enjailler ’, ça vient de l'anglais ‘ enjoy ’ : ça veut dire s'amuser. Ce n'est pas du mauvais français, c'est notre manière de parler entre amis, un peu comme le verlan à Paris. ” La musique commence et tout le monde se lève.",
            translation: "O Koffi explica: “É nouchi, a gíria dos jovens de Abidjan. ‘S'enjailler’ vem do inglês ‘enjoy’: quer dizer se divertir. Não é francês ruim, é o nosso jeito de falar entre amigos, um pouco como o verlan em Paris.” A música começa e todo mundo se levanta.",
            choices: [
              { text: 'Linu danse avec tout le monde.', translation: 'O Linu dança com todo mundo.', next: 'final_danse' },
              { text: 'Linu reste assis et finit le piment.', translation: 'O Linu fica sentado e termina a pimenta.', next: 'final_piment' },
            ],
          },
          final_danse: {
            emoji: '💃',
            text: "Linu danse comme un pingouin, et tout le monde l'applaudit. À la fin, Aya lui dit : “ Tu t'es bien enjaillé ! Il faut que tu reviennes bientôt. ” Linu répond : “ Y a pas drap ! ”",
            translation: 'O Linu dança como um pinguim, e todo mundo aplaude. No fim, a Aya lhe diz: “Você curtiu bastante! Você precisa voltar logo.” O Linu responde: “Sem problema!”',
            ending: {
              tone: 'bom',
              title: 'Pinguim no maquis',
              message: "Você acompanhou o subjuntivo (“il faut que tu saches”, “je veux que tu voies”, “je suis contente que tu sois venu”) e o discurso indireto (“elle dit qu'elle nous attend”), e ainda aprendeu um pouco de nouchi.",
            },
          },
          final_piment: {
            emoji: '🌶️',
            text: "Linu met tout le piment sur son poisson. Deux secondes plus tard, il devient tout rouge : “ Il faut que je boive de l'eau, vite ! ” Koffi lui tend une bouteille en riant : “ Ici, il faut que tu goûtes le piment avant de le manger ! ”",
            translation: 'O Linu põe toda a pimenta no peixe. Dois segundos depois, fica todo vermelho: “Preciso beber água, rápido!” O Koffi lhe entrega uma garrafa, rindo: “Aqui, você precisa provar a pimenta antes de comê-la!”',
            ending: {
              tone: 'neutro',
              title: 'Pimenta demais',
              message: 'O Linu sobreviveu à pimenta, mas perdeu a dança. Da próxima vez, prove antes!',
            },
          },
        },
      },
      {
        id: 'fr-sn-h3',
        variant: 'fr-SN',
        level: 'B2.2',
        cefr: 'B2',
        title: 'Une lettre à Saint-Louis',
        emoji: '🦩',
        summary: 'Voluntário numa escola de Saint-Louis, o Linu precisa escrever uma carta oficial ao diretor do parque do Djoudj para levar os alunos a ver pelicanos e flamingos.',
        cultural_context:
          'Saint-Louis, fundada pelos franceses em 1659 numa ilha do rio Senegal, perto da foz, foi a capital da colônia do Senegal e, até 1902, da África Ocidental Francesa. A ilha, com as suas casas coloniais de sacadas, é Patrimônio Mundial da UNESCO desde 2000 e se liga ao continente pela ponte metálica Faidherbe. A cerca de 60 km fica o Parque Nacional dos Pássaros do Djoudj, também Patrimônio Mundial, onde milhões de aves migratórias passam o inverno europeu, entre novembro e abril.',
        start: 'start',
        glossary: [
          ["J'ai l'honneur de solliciter…", 'Venho respeitosamente solicitar… (carta oficial)'],
          ['Monsieur le Conservateur,', 'Senhor Diretor, (abertura formal)'],
          ['la sortie serait encadrée par…', 'o passeio seria acompanhado por… (voz passiva)'],
          ['votre courrier a été enregistré', 'a sua correspondência foi registrada'],
          ['votre demande a été acceptée', 'o seu pedido foi aceito'],
          ['en main propre', 'em mãos'],
          ['Veuillez agréer…', 'Atenciosamente… (fecho formal)'],
          ['la pirogue', 'a piroga, a canoa'],
        ],
        nodes: {
          start: {
            emoji: '🌉',
            text: "Linu est bénévole dans une école de Saint-Louis. La directrice, Madame Ndiaye, l'appelle dans son bureau : “ Nous aimerions emmener les élèves au parc du Djoudj. Une demande officielle doit être adressée au conservateur du parc. Pourriez-vous la rédiger ? ”",
            translation: 'O Linu é voluntário numa escola de Saint-Louis. A diretora, a senhora Ndiaye, o chama à sua sala: “Gostaríamos de levar os alunos ao parque do Djoudj. Um pedido oficial deve ser dirigido ao diretor do parque. O senhor poderia redigi-lo?”',
            choices: [
              { text: '“ Avec plaisir, Madame la Directrice. ”', translation: '“Com prazer, senhora diretora.”', next: 'lettre' },
              {
                text: "“ Pas besoin de lettre, on part demain avec un guide ! ”",
                translation: '“Não precisa de carta, vamos amanhã com um guia!”',
                wrong: 'A diretora disse “une demande officielle doit être adressée au conservateur” (voz passiva com “devoir”): a visita de um grupo escolar precisa de um pedido oficial por escrito antes.',
              },
            ],
          },
          lettre: {
            emoji: '✍️',
            text: "Linu prend une feuille. Madame Ndiaye lui rappelle : “ Au Sénégal, les lettres administratives sont très formelles. Commencez par le titre de la personne. ” Comment Linu commence-t-il sa lettre ?",
            translation: 'O Linu pega uma folha. A senhora Ndiaye lhe lembra: “No Senegal, as cartas administrativas são muito formais. Comece pelo cargo da pessoa.” Como o Linu começa a carta?',
            choices: [
              { text: '“ Monsieur le Conservateur, ”', translation: '“Senhor Diretor,”', next: 'corps' },
              {
                text: '“ Cher ami, ”',
                translation: '“Caro amigo,”',
                wrong: '“Cher ami” é para cartas pessoais. Numa carta oficial, a abertura usa o cargo do destinatário: “Monsieur le Conservateur”, “Madame la Directrice”, “Monsieur le Maire”.',
              },
            ],
          },
          corps: {
            emoji: '📜',
            text: "“ Monsieur le Conservateur, J'ai l'honneur de solliciter l'autorisation d'organiser une visite du parc pour trente élèves de notre école, le 18 janvier. La sortie serait encadrée par trois enseignants, et les élèves seraient transportés en car. Dans l'attente de votre réponse, je vous prie d'agréer, Monsieur le Conservateur, l'expression de ma haute considération. ”",
            translation: '“Senhor Diretor, Venho respeitosamente solicitar autorização para organizar uma visita ao parque para trinta alunos da nossa escola, no dia 18 de janeiro. O passeio seria acompanhado por três professores, e os alunos seriam transportados de ônibus. No aguardo da sua resposta, subscrevo-me, Senhor Diretor, com elevada consideração.”',
            choices: [
              { text: 'Linu dépose la lettre en main propre au bureau du parc.', translation: 'O Linu entrega a carta em mãos no escritório do parque.', next: 'depot' },
              { text: 'Linu envoie la lettre par courriel.', translation: 'O Linu manda a carta por e-mail.', next: 'courriel' },
            ],
          },
          courriel: {
            emoji: '📧',
            text: "Une semaine passe, et aucune réponse n'arrive. Madame Ndiaye conseille : “ Je pense que vous devriez aussi déposer la lettre au bureau du parc. Une lettre déposée en main propre est enregistrée tout de suite, et vous recevez un accusé de réception. ”",
            translation: 'Passa uma semana, e nenhuma resposta chega. A senhora Ndiaye aconselha: “Acho que o senhor deveria também entregar a carta no escritório do parque. Uma carta entregue em mãos é registrada na hora, e o senhor recebe um comprovante de recebimento.”',
            choices: [{ text: 'Linu dépose la lettre au bureau du parc.', translation: 'O Linu entrega a carta no escritório do parque.', next: 'depot' }],
          },
          depot: {
            emoji: '🗂️',
            text: "Au bureau, un agent tamponne la lettre : “ Votre courrier a été enregistré sous le numéro 214. Il sera transmis au conservateur dès aujourd'hui. Une réponse vous sera communiquée dans la semaine. ” Quelques jours plus tard, la réponse arrive : “ Nous avons le plaisir de vous informer que votre demande a été acceptée. La visite sera encadrée par un guide du parc. Le départ en pirogue est fixé à sept heures du matin. ”",
            translation: 'No escritório, um funcionário carimba a carta: “A sua correspondência foi registrada sob o número 214. Ela será encaminhada ao diretor ainda hoje. Uma resposta lhe será comunicada ao longo da semana.” Alguns dias depois, a resposta chega: “Temos o prazer de informar que o seu pedido foi aceito. A visita será acompanhada por um guia do parque. A saída de piroga está marcada para as sete horas da manhã.”',
            choices: [
              { text: "Le groupe part à l'aube, comme prévu.", translation: 'O grupo sai de madrugada, como previsto.', next: 'final_djoudj' },
              { text: 'Le groupe part à midi, pour dormir un peu plus.', translation: 'O grupo sai ao meio-dia, para dormir um pouco mais.', next: 'final_midi' },
            ],
          },
          final_djoudj: {
            emoji: '🦩',
            text: "À l'aube, la pirogue glisse sur l'eau calme. Soudain, des milliers de pélicans s'envolent devant les élèves, et des flamants roses marchent au loin. Le guide explique : “ Chaque hiver, le parc est visité par des millions d'oiseaux venus d'Europe. Les pélicans, eux, font leurs nids ici. ” Les enfants applaudissent, et Linu est très fier de sa lettre.",
            translation: 'Ao amanhecer, a piroga desliza sobre a água calma. De repente, milhares de pelicanos levantam voo diante dos alunos, e flamingos cor-de-rosa caminham ao longe. O guia explica: “Todo inverno, o parque é visitado por milhões de aves vindas da Europa. Já os pelicanos fazem ninho aqui.” As crianças aplaudem, e o Linu fica muito orgulhoso da sua carta.',
            ending: {
              tone: 'bom',
              title: 'Mil pelicanos',
              message: "Você escreveu uma carta oficial em francês: abertura com o cargo, “J'ai l'honneur de solliciter”, voz passiva (“serait encadrée”, “a été acceptée”) e o fecho “je vous prie d'agréer… l'expression de ma haute considération”.",
            },
          },
          final_midi: {
            emoji: '☀️',
            text: "À midi, le soleil est brûlant. Le guide explique poliment que l'horaire fixé n'a pas été respecté et que la plupart des oiseaux se sont cachés à l'ombre. Les élèves voient quelques pélicans endormis, puis rentrent à Saint-Louis un peu déçus.",
            translation: 'Ao meio-dia, o sol está escaldante. O guia explica educadamente que o horário marcado não foi respeitado e que a maioria das aves se escondeu na sombra. Os alunos veem alguns pelicanos dormindo e voltam a Saint-Louis um pouco decepcionados.',
            ending: {
              tone: 'neutro',
              title: 'Pássaros dorminhocos',
              message: 'A carta deu certo, mas a resposta oficial dizia “le départ est fixé à sept heures”. Ler bem a correspondência administrativa também faz parte do francês formal!',
            },
          },
        },
      },
    ],
  },
];
