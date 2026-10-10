import type { LanguageVariant } from '../types';

/**
 * Os dialetos do alemão (decisão do dono, 10/10/2026): o alemão é pluricêntrico, com três normas
 * nacionais. A Alemanha é o padrão do curso; a Áustria e a Suíça são dialetos completos. Os falares de
 * cada país ficam como sotaques (sotaques.ts); o suíço-alemão falado, o baixo-alemão, o luxemburguês e o
 * sorábio têm curso próprio e aparecem como línguas. Vocabulário no formato [Alemanha, dialeto,
 * explicação, nota]. Como o curso ainda vai até o A2, as histórias também são A2.
 *
 * Fontes: Wikipédia em alemão («Österreichisches Deutsch», «Schweizer Hochdeutsch», «Helvetismus»,
 * «Austriazismus», consultadas em 10/10/2026); o Protocolo n.º 10 do Tratado de Adesão da Áustria à
 * União Europeia (1994), com os 23 termos austríacos de comida reconhecidos; o Österreichisches
 * Wörterbuch (desde 1951) e o Schweizer Wörterbuch (Duden).
 */
export const VARIANTS_DE: LanguageVariant[] = [
  {
    code: 'de-DE',
    country: 'DEU',
    kind: 'dialeto',
    speechLocale: 'de-DE',
    name: 'Alemão da Alemanha',
    flag: '🇩🇪',
    summary:
      'O padrão do curso: o alemão-padrão (Hochdeutsch) da Alemanha, o da escola, da TV e dos jornais, com o dicionário Duden como referência.',
    card: {
      id: 'de-de-c1',
      title: 'Um alemão, três normas',
      emoji: '🇩🇪',
      history:
        'O alemão escrito comum nasceu aos poucos, a partir do século XVI, com a tradução da Bíblia de Martinho Lutero, que misturou formas do centro e do sul para ser entendido em toda parte. Em 1880, Konrad Duden publicou o dicionário que até hoje leva o seu nome, e em 1901 os países de língua alemã combinaram uma ortografia única, reformada em 1996 e de novo em 2006. Mesmo assim, o alemão é uma língua pluricêntrica: a Alemanha, a Áustria e a Suíça têm cada uma o seu padrão, com palavras, pronúncia e às vezes gramática próprias. O curso ensina o da Alemanha, o mais usado nos livros didáticos.',
      culture_tip:
        'Na Alemanha, o tratamento importa: com desconhecidos, no trabalho e com gente mais velha se usa “Sie”, com o verbo no plural, e o sobrenome (“Frau Schmidt”, “Herr Weber”); o “du” é para amigos, família e crianças, e quem propõe a troca costuma ser a pessoa mais velha ou de posição mais alta. A pontualidade é levada a sério, e no domingo as lojas fecham. O cumprimento muda de região para região: “Moin” no norte, “Grüß Gott” na Baviera.',
      grammar_why:
        'O padrão da Alemanha é o que o curso ensina: “Kartoffel” (batata), “Tomate”, “Januar”, “Fahrrad” (bicicleta), o “ß” depois de vogal longa (“Straße”), e o pretérito perfeito composto com “haben” para “sitzen”, “stehen” e “liegen” (“ich habe gesessen”). Na Áustria e na Suíça, cada um desses pontos muda.',
      grammar_examples: [
        ['Ich habe lange gesessen.', 'Fiquei sentado muito tempo.'],
        ['Im Januar fahre ich Fahrrad.', 'Em janeiro eu ando de bicicleta.'],
        ['Die Straße ist lang.', 'A rua é comprida.'],
      ],
      character_guide: null,
    },
  },

  // ───────────────────────────── ÁUSTRIA ─────────────────────────────
  {
    code: 'de-AT',
    country: 'AUT',
    kind: 'dialeto',
    speechLocale: 'de-AT',
    name: 'Alemão da Áustria',
    flag: '🇦🇹',
    summary:
      'O alemão-padrão da Áustria, com dicionário próprio, o Österreichisches Wörterbuch, e palavras que a União Europeia reconheceu oficialmente: Erdäpfel, Paradeiser, Marillen, Schlagobers.',
    card: {
      id: 'de-at-c1',
      title: 'Erdäpfel e Paradeiser',
      emoji: '🇦🇹',
      history:
        'Desde 1951, a Áustria tem o seu próprio dicionário oficial, o Österreichisches Wörterbuch, usado nas escolas e na administração. Quando o país entrou na União Europeia, em 1995, o tratado de adesão trouxe o Protocolo n.º 10, que garante 23 palavras austríacas de comida com o mesmo valor das alemãs nos textos da União: Erdäpfel (batatas), Paradeiser (tomates), Marillen (damascos), Schlagobers (chantili), Topfen (requeijão), Karfiol (couve-flor) e outras. O alemão da Áustria não é “alemão errado”: é uma das três normas da língua, com vocabulário, pronúncia e algumas regras próprias.',
      culture_tip:
        'O café vienense é uma instituição: pede-se uma “Melange” (café com leite espumado) e fica-se horas lendo o jornal; os cafés de Viena são Patrimônio Imaterial da Áustria pela UNESCO. Cumprimenta-se com “Grüß Gott” (formal) ou “Servus” (entre amigos), e títulos acadêmicos são usados no dia a dia: “Frau Magister”, “Herr Doktor”. O mês de janeiro é “Jänner”, e “heuer” quer dizer “este ano”.',
      grammar_why:
        'A gramática é a mesma, com algumas diferenças: (1) “sitzen”, “stehen” e “liegen” fazem o perfeito com “sein”: “ich bin gesessen” (Alemanha: “ich habe gesessen”); (2) o diminutivo em “-erl” e “-l”: “Sackerl” (saquinho), “Busserl” (beijinho); (3) palavras próprias na comida, no calendário e na escola: “Jänner”, “heuer”, “Matura”; (4) algumas palavras mudam de gênero: “das Cola”, “das Joghurt” (Alemanha: “die Cola”, “der Joghurt”).',
      grammar_examples: [
        ['Ich bin lange gesessen.', 'Fiquei sentado muito tempo. (Alemanha: Ich habe gesessen.)'],
        ['Im Jänner fahren wir Ski.', 'Em janeiro a gente esquia. (Alemanha: Januar)'],
        ['Heuer fahren wir nach Tirol.', 'Este ano vamos ao Tirol. (Alemanha: dieses Jahr)'],
        ['Brauchen Sie ein Sackerl?', 'O senhor precisa de um saquinho? (Alemanha: eine Tüte)'],
        ['Ich nehme Erdäpfel mit Paradeisern.', 'Vou querer batatas com tomates. (Alemanha: Kartoffeln mit Tomaten)'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O “-ig” do fim da palavra soa “ik”, e não “ich” como no norte da Alemanha: “König” soa [ˈkøːnɪk].',
      'O “s” no começo da palavra antes de vogal é surdo, como o nosso “s”: “Sonne” soa [ˈsɔnə], não [ˈzɔnə].',
      '“Chemie” e “China” começam com “k”: [keˈmiː], [ˈkiːna].',
      'Muitas palavras de origem francesa e grega levam a tônica em outra sílaba: “Kaffee” é [kaˈfeː], com a tônica no fim.',
      'A melodia é mais cantada e as vogais, mais longas que no norte da Alemanha.',
    ],
    vocab: [
      ['Kartoffeln', 'Erdäpfel', 'batatas', 'literalmente “maçãs da terra”, como o francês “pommes de terre”; está no Protocolo n.º 10'],
      ['Tomaten', 'Paradeiser', 'tomates', 'de “Paradiesapfel”, maçã do paraíso'],
      ['Aprikosen', 'Marillen', 'damascos', 'os “Marillenknödel” são bolinhos recheados de damasco'],
      ['Schlagsahne', 'Schlagobers', 'chantili', 'no café vienense, “mit Schlag”'],
      ['Quark', 'Topfen', 'requeijão fresco', 'vai no “Topfenstrudel”'],
      ['Blumenkohl', 'Karfiol', 'couve-flor', 'do italiano “cavolfiore”'],
      ['grüne Bohnen', 'Fisolen', 'vagens'],
      ['Hackfleisch', 'Faschiertes', 'carne moída'],
      ['Meerrettich', 'Kren', 'raiz-forte', 'do tcheco “křen”'],
      ['Januar', 'Jänner', 'janeiro', 'nos documentos oficiais também'],
      ['dieses Jahr', 'heuer', 'este ano', 'também no sul da Alemanha'],
      ['Tüte', 'Sackerl', 'saquinho', 'com o diminutivo austríaco “-erl”'],
      ['Brötchen', 'Semmel', 'pãozinho', 'também na Baviera'],
      ['Abitur', 'Matura', 'exame do fim do ensino médio', 'também na Suíça (Matur)'],
    ],
    stories: [
      {
        id: 'de-h5',
        variant: 'de-AT',
        level: 'A2.1',
        cefr: 'A2',
        title: 'Eine Melange in Wien',
        emoji: '☕',
        summary: 'Num café de Viena, Linu pede um café e uma torta e descobre que em Viena o chantili, a batata e até o mês de janeiro têm outro nome.',
        cultural_context:
          'Os cafés de Viena são famosos no mundo inteiro: mármore, jornais pendurados, garçons de terno e horas de conversa. Ali se pede uma “Melange” (café com leite espumado) e uma torta “mit Schlag”, com chantili, que na Áustria se chama “Schlagobers”.',
        start: 'start',
        glossary: [
          ['Grüß Gott', 'bom dia, boa tarde (formal, no sul)'],
          ['die Melange', 'café com leite espumado'],
          ['das Schlagobers', 'chantili (Alemanha: die Schlagsahne)'],
          ['mit Schlag', 'com chantili'],
          ['der Herr Ober', 'o garçom (tratamento)'],
          ['zahlen, bitte', 'a conta, por favor'],
        ],
        nodes: {
          start: {
            emoji: '🏛️',
            text: 'Linu ist in Wien. Er geht in ein altes Kaffeehaus. Ein Kellner sagt: „Grüß Gott! Was darf es sein?“',
            translation: 'Linu está em Viena. Ele entra num café antigo. Um garçom diz: “Bom dia! O que vai ser?”',
            choices: [
              { text: '„Grüß Gott! Eine Melange, bitte.“', translation: '“Bom dia! Uma melange, por favor.”', next: 'melange' },
              {
                text: '„Tschüss!“',
                translation: '“Tchau!”',
                wrong: 'O garçom acabou de cumprimentar: “Grüß Gott” é o “bom dia” formal da Áustria. Responda com ele também.',
              },
            ],
          },
          melange: {
            emoji: '☕',
            text: '„Gerne. Und dazu? Wir haben Apfelstrudel und Sachertorte. Mit Schlag?“ Linu versteht „Schlag“ nicht.',
            translation: '“Com prazer. E para acompanhar? Temos strudel de maçã e torta Sacher. Com Schlag?” Linu não entende “Schlag”.',
            choices: [
              { text: '„Was ist Schlag?“', translation: '“O que é Schlag?”', next: 'schlag' },
            ],
          },
          schlag: {
            emoji: '🍰',
            text: 'Der Kellner lacht: „Schlagobers! In Deutschland sagt man Schlagsahne.“ Linu sagt: „Dann eine Sachertorte mit Schlag, bitte!“',
            translation: 'O garçom ri: “Schlagobers! Na Alemanha se diz Schlagsahne.” Linu diz: “Então uma torta Sacher com chantili, por favor!”',
            choices: [
              { text: 'Linu isst und liest die Zeitung.', translation: 'Linu come e lê o jornal.', next: 'zeitung' },
            ],
          },
          zeitung: {
            emoji: '📰',
            text: 'In der Zeitung steht: „Im Jänner: Erdäpfel billiger.“ Linu fragt den Kellner: „Was ist Jänner? Und was sind Erdäpfel?“',
            translation: 'No jornal está escrito: “Em janeiro: batatas mais baratas.” Linu pergunta ao garçom: “O que é Jänner? E o que são Erdäpfel?”',
            choices: [
              {
                text: 'Der Kellner erklärt: „Jänner ist Januar, und Erdäpfel sind Kartoffeln.“',
                translation: 'O garçom explica: “Jänner é janeiro, e Erdäpfel são batatas.”',
                next: 'final_bom',
              },
              {
                text: 'Linu denkt: Erdäpfel sind Äpfel.',
                translation: 'Linu pensa: Erdäpfel são maçãs.',
                wrong: '“Erdäpfel” (maçãs da terra) são batatas, como o francês “pommes de terre”. Na Alemanha se diz “Kartoffeln”.',
              },
            ],
          },
          final_bom: {
            emoji: '🎉',
            text: 'Linu zahlt und sagt: „Danke, Herr Ober! Auf Wiedersehen!“ Der Kellner lächelt: „Servus! Kommen Sie wieder!“',
            translation: 'Linu paga e diz: “Obrigado, garçom! Até logo!” O garçom sorri: “Tchau! Volte sempre!”',
            ending: {
              tone: 'bom',
              title: 'Wie ein Wiener',
              message: 'Você pediu como um vienense e aprendeu palavras da Áustria: Grüß Gott, Melange, Schlagobers, Jänner e Erdäpfel.',
            },
          },
        },
      },
      {
        id: 'de-h6',
        variant: 'de-AT',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Am Naschmarkt',
        emoji: '🍅',
        summary: 'No Naschmarkt, o grande mercado de Viena, Linu compra legumes para cozinhar com a amiga Lena e aprende os nomes austríacos da feira.',
        cultural_context:
          'O Naschmarkt é o mercado mais famoso de Viena, com bancas de frutas, verduras, especiarias e restaurantes. Ali se ouvem as palavras de comida que a União Europeia reconheceu como austríacas em 1995: Paradeiser (tomates), Erdäpfel (batatas), Marillen (damascos), Karfiol (couve-flor).',
        start: 'start',
        glossary: [
          ['die Paradeiser', 'tomates (Alemanha: Tomaten)'],
          ['die Erdäpfel', 'batatas (Alemanha: Kartoffeln)'],
          ['die Marillen', 'damascos (Alemanha: Aprikosen)'],
          ['der Karfiol', 'couve-flor (Alemanha: Blumenkohl)'],
          ['das Sackerl', 'saquinho (Alemanha: die Tüte)'],
          ['heuer', 'este ano'],
        ],
        nodes: {
          start: {
            emoji: '🧺',
            text: 'Linu und Lena gehen auf den Naschmarkt. Lena sagt: „Heute kochen wir Gulasch mit Erdäpfeln. Wir brauchen Paradeiser, Erdäpfel und Zwiebeln.“',
            translation: 'Linu e Lena vão ao Naschmarkt. Lena diz: “Hoje vamos fazer gulache com batatas. Precisamos de tomates, batatas e cebolas.”',
            choices: [
              { text: '„Paradeiser? Was ist das?“', translation: '“Paradeiser? O que é isso?”', next: 'paradeiser' },
            ],
          },
          paradeiser: {
            emoji: '🍅',
            text: 'Lena zeigt auf rote Tomaten: „Das sind Paradeiser! So sagen wir in Österreich.“ Der Verkäufer fragt: „Ein Kilo? Brauchen Sie ein Sackerl?“',
            translation: 'Lena aponta para tomates vermelhos: “Isto são Paradeiser! É assim que a gente diz na Áustria.” O vendedor pergunta: “Um quilo? Precisa de um saquinho?”',
            choices: [
              { text: '„Ja, bitte, ein Sackerl.“', translation: '“Sim, por favor, um saquinho.”', next: 'marillen' },
              {
                text: '„Nein, ich brauche keinen Sack Kartoffeln.“',
                translation: '“Não, não preciso de um saco de batatas.”',
                wrong: '“Sackerl” é só um saquinho para levar os tomates (na Alemanha, “Tüte”). O vendedor não falou de batatas.',
              },
            ],
          },
          marillen: {
            emoji: '🍑',
            text: 'Am nächsten Stand gibt es orange Früchte. „Marillen aus der Wachau!“, ruft die Verkäuferin. „Heuer sind sie besonders süß.“ Lena sagt: „Dann machen wir auch Marillenknödel!“',
            translation: 'Na banca seguinte há frutas cor de laranja. “Damascos da Wachau!”, grita a vendedora. “Este ano estão especialmente doces.” Lena diz: “Então vamos fazer também bolinhos de damasco!”',
            choices: [
              { text: '„Super! Ich kaufe ein Kilo Marillen.“', translation: '“Ótimo! Vou comprar um quilo de damascos.”', next: 'final_bom' },
              { text: '„Nein, ich mag keine Marillen.“', translation: '“Não, eu não gosto de damasco.”', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '🥟',
            text: 'Am Abend essen Linu und Lena Gulasch mit Erdäpfeln und dann Marillenknödel. Lena lacht: „Du sprichst schon wie ein Wiener!“',
            translation: 'À noite, Linu e Lena comem gulache com batatas e depois bolinhos de damasco. Lena ri: “Você já fala como um vienense!”',
            ending: {
              tone: 'bom',
              title: 'Jantar austríaco',
              message: 'Você fez as compras com as palavras da Áustria: Paradeiser, Erdäpfel, Marillen, Sackerl e heuer.',
            },
          },
          final_neutro: {
            emoji: '🍲',
            text: 'Sie kochen nur Gulasch. Lena sagt: „Schade! Marillenknödel sind das Beste in Österreich. Nächstes Mal probierst du sie!“',
            translation: 'Eles fazem só o gulache. Lena diz: “Que pena! Bolinho de damasco é o melhor da Áustria. Da próxima vez você prova!”',
            ending: {
              tone: 'neutro',
              title: 'A sobremesa ficou para depois',
              message: 'Valeu a feira, mas faltou provar um clássico austríaco. Da próxima vez, aceite os Marillenknödel!',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── SUÍÇA ─────────────────────────────
  {
    code: 'de-CH',
    country: 'CHE',
    kind: 'dialeto',
    speechLocale: 'de-CH',
    name: 'Alemão da Suíça (Schweizer Hochdeutsch)',
    flag: '🇨🇭',
    summary:
      'O alemão-padrão da Suíça, a língua escrita, da escola e do noticiário. Não usa o “ß”, tem palavras próprias (Velo, Trottoir, parkieren) e convive com o suíço-alemão, os dialetos que todo mundo fala no dia a dia.',
    card: {
      id: 'de-ch-c1',
      title: 'Velo, Trottoir e nenhum ß',
      emoji: '🇨🇭',
      history:
        'A Suíça tem quatro línguas nacionais: alemão, francês, italiano e romanche. Na parte de língua alemã, onde vivem cerca de dois terços da população, existe uma situação especial chamada diglossia: na fala do dia a dia, em casa, no trabalho e até na TV local, todo mundo fala o suíço-alemão (Schweizerdeutsch), os dialetos de cada cantão; para escrever, na escola e no noticiário nacional, usa-se o alemão-padrão da Suíça (Schweizer Hochdeutsch). Esse padrão tem marcas próprias: a Suíça deixou de usar o “ß” ao longo do século XX (o jornal Neue Zürcher Zeitung abandonou a letra em 1974) e tem muitas palavras vindas do francês, a língua vizinha.',
      culture_tip:
        'Mesmo falando alemão-padrão, os suíços cumprimentam com “Grüezi” (formal) ou “Hoi” e “Sali” (entre amigos), e agradecem com “Merci” ou “Merci vielmal”. Às nove da manhã é hora do “Znüni”, o lanche (de “zu Neun”, às nove), e o croissant é o “Gipfeli”. Para um suíço, falar alemão-padrão com um estrangeiro é gentileza: entre eles, a conversa é em dialeto.',
      grammar_why:
        'A gramática é a mesma, com diferenças conhecidas: (1) não há “ß”: “Strasse”, “gross”, “Fuss”; (2) muitas palavras francesas: “Velo” (bicicleta), “Trottoir” (calçada), “Billett” (bilhete), “Poulet” (frango), “Glace” (sorvete), “Merci”; (3) verbos em “-ieren” onde a Alemanha usa outros: “parkieren” (estacionar), “grillieren” (grelhar); (4) como na Áustria, “sitzen”, “stehen” e “liegen” fazem o perfeito com “sein”: “ich bin gesessen”.',
      grammar_examples: [
        ['Ich fahre mit dem Velo zur Arbeit.', 'Vou de bicicleta para o trabalho. (Alemanha: mit dem Fahrrad)'],
        ['Du kannst hier nicht parkieren.', 'Você não pode estacionar aqui. (Alemanha: parken)'],
        ['Die Strasse ist sehr gross.', 'A rua é muito grande. (Alemanha: Straße, groß)'],
        ['Zum Znüni gibt es ein Gipfeli.', 'No lanche das nove tem croissant. (Alemanha: Croissant)'],
        ['Merci vielmal!', 'Muito obrigado! (Alemanha: Vielen Dank!)'],
      ],
      character_guide: [['ss', 'a Suíça não usa o “ß”: escreve sempre “ss”', 'Strasse, gross, Fuss, heissen']],
    },
    pronunciation: [
      'O alemão-padrão falado pelos suíços tem a melodia do suíço-alemão: mais lenta, com as sílabas bem separadas.',
      'O “ch” depois de “i” e “e” costuma soar mais forte, quase o “ch” de “Bach”: “ich” soa perto de [ɪx].',
      'O “-ig” do fim soa “ik”, e o “r” muitas vezes é vibrado na ponta da língua.',
      'As palavras francesas levam a tônica na primeira sílaba: “Büro” soa [ˈbyːro], “Billett” soa [ˈbɪlɛt].',
    ],
    vocab: [
      ['Fahrrad', 'Velo', 'bicicleta', 'do francês “vélo”'],
      ['Bürgersteig', 'Trottoir', 'calçada', 'do francês'],
      ['parken', 'parkieren', 'estacionar', 'com o sufixo “-ieren”'],
      ['grillen', 'grillieren', 'grelhar, fazer churrasco', 'a mesma regra'],
      ['Fahrkarte', 'Billett', 'bilhete, passagem', 'do francês “billet”'],
      ['Hähnchen', 'Poulet', 'frango', 'do francês'],
      ['Eis', 'Glace', 'sorvete', 'do francês'],
      ['Handy', 'Natel', 'celular', 'nome antigo da rede de celular suíça, que virou palavra comum'],
      ['Krankenhaus', 'Spital', 'hospital', 'também na Áustria'],
      ['umziehen', 'zügeln', 'mudar de casa'],
      ['Dachboden', 'Estrich', 'sótão', 'cuidado: na Alemanha, “Estrich” é o contrapiso'],
      ['Croissant', 'Gipfeli', 'croissant', 'o do café da manhã e do Znüni'],
      ['Vormittagspause', 'Znüni', 'lanche das nove', 'de “zu Neun”, às nove'],
      ['Straße', 'Strasse', 'rua', 'a Suíça não usa o “ß”'],
    ],
    stories: [
      {
        id: 'de-h7',
        variant: 'de-CH',
        level: 'A2.1',
        cefr: 'A2',
        title: 'Mit dem Velo durch Zürich',
        emoji: '🚲',
        summary: 'Em Zurique, a amiga Nina empresta uma bicicleta a Linu, e os dois vão até o lago; no caminho, ele aprende as palavras suíças do trânsito.',
        cultural_context:
          'Em Zurique, a maior cidade da Suíça, muita gente vai ao trabalho de bicicleta, que na Suíça se chama “Velo”, como em francês. Os suíços escrevem e falam com estrangeiros em alemão-padrão, mas com palavras próprias: “Trottoir” (calçada), “parkieren” (estacionar), “Billett” (bilhete).',
        start: 'start',
        glossary: [
          ['das Velo', 'bicicleta (Alemanha: das Fahrrad)'],
          ['das Trottoir', 'calçada (Alemanha: der Bürgersteig)'],
          ['parkieren', 'estacionar (Alemanha: parken)'],
          ['das Billett', 'bilhete (Alemanha: die Fahrkarte)'],
          ['Grüezi', 'olá (formal, na Suíça)'],
          ['Merci', 'obrigado'],
        ],
        nodes: {
          start: {
            emoji: '🏙️',
            text: 'Linu ist in Zürich. Seine Freundin Nina sagt: „Grüezi, Linu! Willst du mit dem Velo zum See fahren?“',
            translation: 'Linu está em Zurique. A amiga dele, Nina, diz: “Olá, Linu! Quer ir de bicicleta até o lago?”',
            choices: [
              { text: '„Velo? Was ist das?“', translation: '“Velo? O que é isso?”', next: 'velo' },
              {
                text: '„Nein, ich habe kein Auto.“',
                translation: '“Não, eu não tenho carro.”',
                wrong: '“Velo” não é carro: é a bicicleta, em alemão da Suíça (na Alemanha, “Fahrrad”).',
              },
            ],
          },
          velo: {
            emoji: '🚲',
            text: 'Nina lacht: „Ein Velo ist ein Fahrrad! Hier ist mein zweites Velo. Aber fahr nicht auf dem Trottoir!“',
            translation: 'Nina ri: “Velo é bicicleta! Aqui está a minha segunda bicicleta. Mas não ande na calçada!”',
            choices: [
              { text: '„Okay, ich fahre auf der Strasse.“', translation: '“Tá bom, eu ando na rua.”', next: 'see' },
              {
                text: 'Linu fährt auf dem Trottoir.',
                translation: 'Linu anda na calçada.',
                wrong: 'A Nina pediu para não andar no “Trottoir”, a calçada (na Alemanha, “Bürgersteig”). Bicicleta vai na rua ou na ciclovia.',
              },
            ],
          },
          see: {
            emoji: '🏞️',
            text: 'Am See sagt Nina: „Hier können wir die Velos parkieren.“ Dann kauft sie zwei Glace. „Möchtest du Schokolade oder Vanille?“',
            translation: 'No lago, a Nina diz: “Aqui a gente pode estacionar as bicicletas.” Depois ela compra dois sorvetes. “Você quer de chocolate ou de baunilha?”',
            choices: [
              { text: '„Schokolade, bitte. Merci vielmal!“', translation: '“Chocolate, por favor. Muito obrigado!”', next: 'final_bom' },
              { text: '„Nein danke, ich habe keinen Hunger.“', translation: '“Não, obrigado, não estou com fome.”', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '🍦',
            text: 'Nina lächelt: „Merci vielmal? Du sprichst schon Schweizer Hochdeutsch!“ Sie essen Glace und schauen auf den See.',
            translation: 'Nina sorri: “Merci vielmal? Você já fala alemão da Suíça!” Eles tomam sorvete olhando o lago.',
            ending: {
              tone: 'bom',
              title: 'Wie ein Zürcher',
              message: 'Você andou de Velo por Zurique e aprendeu as palavras da Suíça: Velo, Trottoir, parkieren, Glace e Merci vielmal.',
            },
          },
          final_neutro: {
            emoji: '🏞️',
            text: 'Nina isst zwei Glace allein. „Schade! Das ist die beste Glace in Zürich“, sagt sie.',
            translation: 'Nina toma os dois sorvetes sozinha. “Que pena! É o melhor sorvete de Zurique”, diz ela.',
            ending: {
              tone: 'neutro',
              title: 'Sorvete perdido',
              message: 'O passeio foi bom, mas a Glace ficou com a Nina. Da próxima vez, aceite e agradeça com “Merci vielmal”!',
            },
          },
        },
      },
      {
        id: 'de-h8',
        variant: 'de-CH',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Znüni in Bern',
        emoji: '🥐',
        summary: 'No primeiro dia de estágio num escritório de Berna, Linu descobre o lanche das nove e percebe que os colegas falam dialeto entre si e alemão-padrão com ele.',
        cultural_context:
          'Na Suíça de língua alemã, as pessoas falam suíço-alemão (Schweizerdeutsch) no dia a dia e escrevem em alemão-padrão. Com estrangeiros, muitos passam para o alemão-padrão por gentileza. Às nove da manhã, em escolas e escritórios, é hora do “Znüni”, um lanche com café e um “Gipfeli” (croissant).',
        start: 'start',
        glossary: [
          ['das Znüni', 'lanche das nove'],
          ['das Gipfeli', 'croissant'],
          ['der Dialekt', 'o dialeto (aqui, o suíço-alemão)'],
          ['das Natel', 'celular (Alemanha: das Handy)'],
          ['Hochdeutsch', 'alemão-padrão'],
          ['Grüezi mitenand', 'olá a todos'],
        ],
        nodes: {
          start: {
            emoji: '🏢',
            text: 'Linu macht ein Praktikum in Bern. Um neun Uhr sagt seine Kollegin Sara: „Komm, es ist Znüni-Zeit!“ Alle gehen in die Küche.',
            translation: 'Linu está fazendo um estágio em Berna. Às nove horas, a colega dele, Sara, diz: “Vem, é hora do Znüni!” Todos vão para a cozinha.',
            choices: [
              { text: '„Was ist Znüni?“', translation: '“O que é Znüni?”', next: 'znueni' },
            ],
          },
          znueni: {
            emoji: '🥐',
            text: 'Sara erklärt: „Znüni kommt von ‚zu Neun‘, um neun Uhr. Wir trinken Kaffee und essen ein Gipfeli.“ In der Küche sprechen die Kollegen schnell und Linu versteht fast nichts.',
            translation: 'Sara explica: “Znüni vem de ‘zu Neun’, às nove. A gente toma café e come um croissant.” Na cozinha, os colegas falam rápido, e Linu não entende quase nada.',
            choices: [
              {
                text: '„Entschuldigung, sprecht ihr Deutsch?“',
                translation: '“Desculpem, vocês estão falando alemão?”',
                next: 'dialekt',
              },
              {
                text: 'Linu denkt, die Kollegen sprechen Französisch.',
                translation: 'Linu acha que os colegas estão falando francês.',
                wrong: 'Em Berna a língua é o alemão: os colegas estão falando suíço-alemão, o dialeto do dia a dia, bem diferente do alemão-padrão.',
              },
            ],
          },
          dialekt: {
            emoji: '🗣️',
            text: 'Alle lachen. Sara sagt: „Wir sprechen Berndeutsch, unseren Dialekt. Aber für dich sprechen wir Hochdeutsch!“ Ein Kollege fragt: „Hast du ein Natel? Gib mir deine Nummer.“',
            translation: 'Todos riem. Sara diz: “A gente está falando bernês, o nosso dialeto. Mas com você a gente fala alemão-padrão!” Um colega pergunta: “Você tem Natel? Me dá o seu número.”',
            choices: [
              { text: '„Natel? Ah, das Handy! Ja, hier ist meine Nummer.“', translation: '“Natel? Ah, o celular! Sim, aqui está o meu número.”', next: 'final_bom' },
              { text: '„Nein, ich habe keine Nummer.“', translation: '“Não, eu não tenho número.”', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '🤝',
            text: 'Der Kollege schreibt Linu sofort eine Nachricht: „Morgen wieder Znüni?“ Linu antwortet: „Klar! Merci!“',
            translation: 'O colega manda na hora uma mensagem para o Linu: “Amanhã de novo Znüni?” Linu responde: “Claro! Obrigado!”',
            ending: {
              tone: 'bom',
              title: 'Primeiro Znüni',
              message: 'Você viveu a diglossia suíça: dialeto entre os colegas, alemão-padrão com você. E aprendeu Znüni, Gipfeli e Natel.',
            },
          },
          final_neutro: {
            emoji: '☕',
            text: 'Linu trinkt seinen Kaffee allein. Am nächsten Tag fragt Sara: „Kommst du heute zum Znüni?“',
            translation: 'Linu toma o café sozinho. No dia seguinte, Sara pergunta: “Você vem hoje para o Znüni?”',
            ending: {
              tone: 'neutro',
              title: 'Amanhã tem mais',
              message: 'O Znüni é o melhor momento para conhecer os colegas. Da próxima vez, troque os números!',
            },
          },
        },
      },
    ],
  },
];
